import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './Styles/SourceItemStyle';
import AppText from '../Common/AppText'
import {Icon} from 'react-native-elements'
import {Metrics, Colors} from '../../Themes'



const SourceItem = (props) => {

    const {name, description, style, category, onPressItem, onPressLink } = props;

    const itemProps = {
        name: 'arrow-right',
        type: 'font-awesome',
        color: Colors.PINKCOLOR,
        containerStyle: styles.iconContainer,
        size: Metrics.icon.small,
        onPress: () => onPressLink()
    }
    const touchableProps = {
        onPress: () => onPressItem(),
        style: styles.titleWrapper
    }
    const nameProps = {
        text: name, 
        style: styles.nameText
    }
    const categoryProps = {
        text: category.charAt(0).toUpperCase() + category.slice(1),
        style: styles.categotyText
    }
    const descriptionProps = {
        numberOfLines: 3, 
        text: description, 
        style: styles.descriptionText
    }

    return (
        <View {...props} style={[styles.container, style]}>
            <TouchableOpacity {...touchableProps} >
                <AppText {...nameProps} />
            </TouchableOpacity>
            <View style={styles.infoWrapper}>
            <AppText {...categoryProps} />
                <Icon {...itemProps} />
                <AppText {...descriptionProps} />
            </View>
        </View>
    );

}

export default SourceItem;
