import React, { Component } from 'react'
import { View, Button } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import AppText from '../Components/Common/AppText'
import styles from '../Containers/Styles/SplashContainerStyle'
import { Icon } from 'react-native-elements'

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
            color: 'white',
            size: 65
        } 

        return (
            <View style={styles.container}>
                <AppText style={styles.title}>News</AppText>
                <Icon {...iconProps} />
                <Button title='Move to SourceContainer' onPress={() => { this.props.navigation.navigate('SourceScreen') }} />
            </View>
        )
    }
}
