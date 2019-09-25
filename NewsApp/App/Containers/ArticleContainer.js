import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class ArticleContainer extends Component {
    render() {
        return (
            <View style={{flex: 1,alignItems: "center", justifyContent: "center"}}>
            <Text> textInComponent </Text>
            <Button title='Move to Detail Container' onPress={()=>{this.props.navigation.navigate('DetailScreen')}} />
            <Button title='Go Back' onPress={()=>{this.props.navigation.goBack()}} />
        </View>
        )
    }
}
