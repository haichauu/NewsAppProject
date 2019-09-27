import React, { Component } from 'react'
import { View, Button, FlatList, Text } from 'react-native'
import styles from '../Source/Styles/SourceItemStyle'
import AppText from '../Common/AppText'
import SourceItem from '../Source/SourceItem'

const AppFlatList = (props) => {
    const { sourceData, articleData, numColumns } = props;

    const isRenderSourceList = () => {
        if(sourceData && !articleData){
            return true
        }
        return false
    }
    const flatListProps = {
        data: isRenderSourceList ? sourceData : articleData,
        numColumns: numColumns,
        renderItem: ({item}) => isRenderSourceList ? renderResourceItem(item) : renderArticleItem(item)
    }

    const renderArticleItem = (item) => {
        const { name, description, url, category } = item;
        const props = {
            style: {
                margin: 5
            },
            name,
            description,
            urlWebsite: 'link',
            category
        }
        return (
            <SourceItem key={item.id} {...props} />
        )
    }

    const renderResourceItem = (item) => {
        const { name, description, url, category } = item;
        const props = {
            style: {
                margin: 5
            },
            name,
            description,
            urlWebsite: 'link',
            category
        }
        return (
            <SourceItem key={item.id} {...props} />
        )
    }

    return (
        <FlatList {...flatListProps}/>
    )
}

export default AppFlatList