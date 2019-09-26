import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import AppText from '../Components/Common/AppText';


export default class ArticleContainer extends Component {
    render() {
        return (
            <View style={{flex: 1,alignItems: "center", justifyContent: "center"}}>
            <AppText> textInComponent </AppText>
            <Button title='Move to Detail Container' onPress={()=>{this.props.navigation.navigate('DetailScreen')}} />
            <Button title='Go Back' onPress={()=>{this.props.navigation.goBack()}} />
        </View>
        )
    }
}
