import React, { Component } from 'react'
import { View } from 'react-native'
import AppText from '../Components/Common/AppText'
import styles from '../Containers/Styles/SplashContainerStyle'
import { Icon } from 'react-native-elements'
import {Metrics, Colors} from '../Themes'

export default class SplashContainer extends Component {

    constructor() {
        super()
        this.state = {
        }
    }

    componentDidMount = () => {
        setTimeout(() => {
            this.props.navigation.navigate('SourceScreen')
        }, 3000);
    }


    render() {
        const iconProps = {
            name: 'logo-snapchat',
            type: 'ionicon',
            color: Colors.WHITECOLOR,
            size: Metrics.icon.lxx
        } 

        return (
            <View style={styles.container}>
                <AppText style={styles.title}>News</AppText>
                <Icon {...iconProps} />
            </View>
        )
    }
}
