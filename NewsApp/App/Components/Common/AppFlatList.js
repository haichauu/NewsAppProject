import React, { Component } from 'react'
import { View, Button, FlatList, Text } from 'react-native'
import styles from '../Source/Styles/SourceItemStyle'
import AppText from '../Common/AppText'
import SourceItem from '../Source/SourceItem'
import ArticleItem from '../Article/ArticleItem'

const AppFlatList = (props) => {
    const { sourceData, articleData, numColumns } = props;

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
            url
        }
        return (
            <ArticleItem {...props} />
        )
    }

    const renderResourceItem = (item) => {
        const {id, name, description, url, category } = item;
        const props = {
            key: id,
            style: {
                margin: 5
            },
            name,
            description,
            urlWebsite: url,
            category
        }
        return (
            <SourceItem key={item.id} {...props} />
        )
    }

    const flatListProps = {
        data: articleData ? articleData : sourceData,
        numColumns: numColumns,
        renderItem: ({item}) => articleData ? renderArticleItem(item) : renderResourceItem(item)
    }

    return (
        <FlatList {...props} {...flatListProps}/>
    )
}

export default AppFlatList