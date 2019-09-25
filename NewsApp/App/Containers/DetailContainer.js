import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class DetailContainer extends Component {
    render() {
        return (
            <View style={{backgroundColor: 'pink', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text> textInComponent </Text>
                <Button title='Go Back' onPress={()=>{this.props.navigation.goBack()}} />
            </View>
        )
    }
}
