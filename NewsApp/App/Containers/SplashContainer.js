import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class SplashContainer extends Component {

    render() {
        return (
            <View style={{flex: 1,alignItems: "center", justifyContent: "center"}}>
                <Text> textInComponent </Text>
                <Button title='Move to SourceContainer' onPress={()=>{this.props.navigation.navigate('SourceScreen')}} />
            </View>
        )
    }
}
