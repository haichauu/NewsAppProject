import React, { Component } from 'react'
import { View, Button } from 'react-native'
import AppText from '../Components/Common/AppText'


export default class SourceContainer extends Component {
    render() {
        return (
            <View style={{flex: 1,alignItems: "center", justifyContent: "center"}}>
                <AppText>Source Screen</AppText>
                <Button title='Move to Article Container' onPress={()=>{this.props.navigation.navigate('ArticleScreen')}} />
                <Button title='Go Back' onPress={()=>{this.props.navigation.goBack()}} />
            </View>
        )
    }
}
