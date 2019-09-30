import React, { Component } from 'react'
import { FlatList } from 'react-native'
import SourceItem from '../Source/SourceItem'
import ArticleItem from '../Article/ArticleItem'

const AppFlatList = (props) => {
    const { sourceData, articleData, numColumns, onPressItem } = props;

    const renderArticleItem = (item) => {
        const {urlToImage, title, author, publishedAt, url, description } = item;
        const props = {
            key: title,
            style: {
                margin: 5
            },
            urlImage: urlToImage,
            title,
            author,
            publishedAt,
            description,
            url,
            onPressItem: () => {onPressItem.navigate('DetailScreen', { url: url })}
        }
        return (
            <ArticleItem {...props} />
        )
    }

    const renderResourceItem = (item) => {
        const {id, name, description, url, category } = item;
        const props = {
            key: id,
            id,
            style: {
                margin: 5
            },
            name,
            description,
            urlWebsite: url,
            category,
            onPressItem: () => {onPressItem.navigate('ArticleScreen', { id: id })}
        }
        return (
            <SourceItem key={item.id} {...props} />
        )
    }

    const flatListProps = {
        data: articleData ? articleData : sourceData ? sourceData : null,
        numColumns: numColumns,
        renderItem: ({item}) => articleData ? renderArticleItem(item) : sourceData ? renderResourceItem(item) : null
    }

    return (
        <FlatList {...props} {...flatListProps}/>
    )
}

export default AppFlatList