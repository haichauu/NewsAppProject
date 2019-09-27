import React, { Component } from 'react';
import { View, Text, ImageBackground, Linking, TouchableOpacity } from 'react-native';
import styles from './Styles/SourceItemStyle';
import AppText from '../Common/AppText'


const SourceItem = (props) => {
    const { name, urlWebsite, description, style, category, onPressItem } = props;
    return (
        <View {...props} style={[styles.container, style]}>
            <TouchableOpacity onPress={onPressItem} style={styles.titleWrapper} >
                <AppText text={name} style={styles.nameText} />
            </TouchableOpacity>
            <View style={styles.infoWrapper}>
            <AppText text={category.charAt(0).toUpperCase() + category.slice(1)} style={styles.categotyText} />
                <AppText onPress={() => {Linking.openURL(urlWebsite)}} text='Link' style={styles.websiteText} />
                <AppText numberOfLines={3} text={description} style={styles.descriptionText} />
            </View>
        </View>
    );

}

export default SourceItem;
