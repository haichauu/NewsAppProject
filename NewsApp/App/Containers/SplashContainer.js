import React, { Component } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import AppText from '../Common/AppText'


const styles = StyleSheet.create({
    text: {
      fontSize: 24,
    }
});

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
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <AppText> News App </AppText>
                <Button title='Move to SourceContainer' onPress={() => { this.props.navigation.navigate('SourceScreen') }} />
            </View>
        )
    }
}
