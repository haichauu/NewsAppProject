import React from 'react';
import {ActivityIndicator } from 'react-native';
import styles from './Styles/AppTextStyle'


const appIndicator = (props) => {

    const {show} = props;
    if(!show) return null

    const indicatorProps = {
        size: 'small',
        color: '#b4d3d3',
        animating: true
    }


    return(
        <ActivityIndicator
        {...indicatorProps}
        />
    )

}

export default appIndicator;