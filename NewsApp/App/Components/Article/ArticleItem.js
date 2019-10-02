import React, { Component } from 'react';
import {View, ImageBackground, TouchableOpacity} from 'react-native';
import AppText from '../Common/AppText'
import styles from './Styles/ArticleItemStyle'
import MoreLessText from '../Common/MoreLessText'
import {convertUTCToLocal} from '../../Utils/Utils'

const ArticleItem = (props) => {
    const {urlImage, title, author, publishedAt, description, style, onPressItem} = props

    
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
                <AppText style={styles.publishedAtText} text={convertUTCToLocal(publishedAt)} />
                <MoreLessText {...moreLessProps}  />
            </View>
        </TouchableOpacity>
    )

}

export default ArticleItem