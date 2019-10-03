import React, { Component } from 'react';
import {View, TouchableOpacity} from 'react-native';
import AppText from '../Common/AppText'
import styles from './Styles/ArticleItemStyle'
import MoreLessText from '../Common/MoreLessText'
import Utils from '../../Utils/Utils'
import FastImage from 'react-native-fast-image'

const ArticleItem = (props) => {
    const {urlImage, title, author, publishedAt, description, style, onPressItem} = props

    
    const moreLessProps = {
        numberOfLines: 3,
        style: styles.descriptionStyle,
        textStyle: styles.descriptionText,
        text: description
    }
    const titleProps = {
        style: styles.titleText,
        text: title
    }
    const publishedAtProps = {
        style: styles.publishedAtText,
        text: Utils.convertUTCToLocal(publishedAt)
    }
    const authorProps = {
        style: styles.authorText,
        text: author
    }

    const imageProps = {
        source: {uri: urlImage}, 
        style: styles.imageBackground
    }

    return(

        <TouchableOpacity {...props} style={[styles.container, style]} onPress={onPressItem} >
            <FastImage {...imageProps} />
            <View style={styles.infoWrapper}>
                <AppText {...titleProps} />
                <AppText {...authorProps} />
                <AppText {...publishedAtProps} />
                <MoreLessText {...moreLessProps}  />
            </View>
        </TouchableOpacity>
    )

}

export default ArticleItem