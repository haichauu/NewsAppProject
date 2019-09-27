import React, { Component } from 'react';
import {View, ImageBackground, TouchableOpacity} from 'react-native';
import AppText from '../Common/AppText'
import styles from './Styles/ArticleItemStyle'
import MoreLessText from '../Common/MoreLessText'
import {navigate, goBack} from '../../Utils/NavigationUtils'

const ArticleItem = (props) => {
    const {urlImage, title, author, publishedAt, description, url, style, onPressItem} = props

    const convertUTCToLocalTime = (utcTime) => {
        let localTime = new Date(utcTime)
        return localTime.getDate() + '/' + localTime.getMonth( ) + '/' + localTime.getFullYear( ) 
        + ' at ' + localTime.getHours() + ':' + localTime.getMinutes()
    }
    
    const moreLessProps = {
        numberOfLines: 3,
        style: styles.descriptionStyle,
        textStyle: styles.descriptionText,
        text: description
    }

    return(

        <TouchableOpacity {...props} style={[styles.container, style]} onPress={onPressItem} >
            <ImageBackground source={{uri: urlImage}} style={styles.imageBackground} />
            <View style={styles.infoWrapper}>
                <AppText style={styles.titleText} text={title} />
                <AppText style={styles.authorText} text={author} />
                <AppText style={styles.publishedAtText} text={convertUTCToLocalTime(publishedAt)} />
                <MoreLessText {...moreLessProps}  />
            </View>
        </TouchableOpacity>
    )

}

export default ArticleItem