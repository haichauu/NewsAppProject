import React from 'react';
import {Text } from 'react-native';
import styles from '../Common/Styles/AppTextStyle'

const AppText = (props) => {
    let text = props.children ? props.children : props.text

    return (
        <Text
            {...props}
            children={text}
            style={[styles.text, props.style]}
        />
    )
}

export default AppText

