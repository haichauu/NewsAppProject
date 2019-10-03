import React, { Component } from 'react'
import { FlatList } from 'react-native'
import styles from './Styles/AppFlatListStyle'
import SourceItem from '../Source/SourceItem'
import ArticleItem from '../Article/ArticleItem'

const AppFlatList = (props) => {
    const { sourceData, articleData, numColumns, onPressItem } = props;

    const renderArticleItem = (item) => {
        const {urlToImage, title, author, publishedAt, url, description, id } = item;
        const props = {
            style: styles.marginItem,
            urlImage: urlToImage,
            title,
            author,
            publishedAt,
            description,
            url,
            id,
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
            style: styles.marginItem,
            name,
            description,
            category,
            onPressItem: () => {onPressItem.navigate('ArticleScreen', { id: id })},
            onPressLink: () => {onPressItem.navigate('NewsDetailScreen', { url: url, name: name})}
        }
        return (
            <SourceItem  {...props} />
        )
    }

    const flatListProps = {
        data: articleData ? articleData : sourceData ? sourceData : null,
        numColumns: numColumns,
        keyExtractor: (item, index) => index.toString(),
        renderItem: ({item}) => articleData ? renderArticleItem(item) : sourceData ? renderResourceItem(item) : null
    }

    return (
        <FlatList {...props} {...flatListProps}/>
    )
}

export default AppFlatList