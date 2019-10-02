import React, { Component } from 'react';
import { View, Text, ImageBackground, Linking, TouchableOpacity } from 'react-native';
import styles from './Styles/SourceItemStyle';
import AppText from '../Common/AppText'
import {Icon} from 'react-native-elements'



const SourceItem = (props) => {

    const {name, description, style, category, onPressItem, onPressLink } = props;
    // APIKEYS = 8acf329a8769447e9bc1c73cb0e76d7d

    const itemProps = {
        name: 'arrow-right',
        type: 'font-awesome',
        color:'#bf7f89',
        containerStyle: styles.iconContainer,
        size: 12,
        onPress: () => onPressLink()
    }

    return (
        <View {...props} style={[styles.container, style]}>
            <TouchableOpacity onPress={() => onPressItem()} style={styles.titleWrapper} >
                <AppText text={name} style={styles.nameText} />
            </TouchableOpacity>
            <View style={styles.infoWrapper}>
            <AppText text={category.charAt(0).toUpperCase() + category.slice(1)} style={styles.categotyText} />
                <Icon {...itemProps} />
                <AppText numberOfLines={3} text={description} style={styles.descriptionText} />
            </View>
        </View>
    );

}

export default SourceItem;
