import React, { Component } from 'react'
<<<<<<< Updated upstream
import { View, Button } from 'react-native'
import AppText from '../Components/Common/AppText'


export default class SourceContainer extends Component {
    render() {
        return (
            <View style={{flex: 1,alignItems: "center", justifyContent: "center"}}>
                <AppText>Source Screen</AppText>
                <Button title='Move to Article Container' onPress={()=>{this.props.navigation.navigate('ArticleScreen')}} />
                <Button title='Go Back' onPress={()=>{this.props.navigation.goBack()}} />
=======
import { View, Button, FlatList, Text } from 'react-native'
import styles from './Styles/SourceContainerStyle'
import AppText from '../Components/Common/AppText'
import SourceItem from '../Components/Source/SourceItem';
import AppFlatList from '../Components/Common/AppFlatList'


export default class SourceContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listResource: [{
                id: "associated-press",
                name: "Associated Press",
                description: "The AP delivers in-depth coverage on the international, politics, lifestyle, business, and entertainment news.",
                url: "https://apnews.com/",
                category: "general",
                language: "en",
                country: "us",
                urlsToLogos: {
                    small: "",
                    medium: "",
                    large: ""
                },
            },
            {
                id: "associated-press",
                name: "Associated Press",
                description: "The AP delivers in-depth coverage on the international, politics, lifestyle, business, and entertainment news.",
                url: "https://apnews.com/",
                category: "general",
                language: "en",
                country: "us",
                urlsToLogos: {
                    small: "",
                    medium: "",
                    large: ""
                },
            },
            {
                id: "associated-press",
                name: "Associated Press",
                description: "The AP delivers in-depth coverage on the international, politics, lifestyle, business, and entertainment news.",
                url: "https://apnews.com/",
                category: "general",
                language: "en",
                country: "us",
                urlsToLogos: {
                    small: "",
                    medium: "",
                    large: ""
                },
            },
            {
                id: "associated-press",
                name: "Associated Press",
                description: "The AP delivers in-depth coverage on the international, politics, lifestyle, business, and entertainment news.",
                url: "https://apnews.com/",
                category: "general",
                language: "en",
                country: "us",
                urlsToLogos: {
                    small: "",
                    medium: "",
                    large: ""
                },
            },

            ]
        }
    }



    render() {
        const {listResource} = this.state
        const flatListProps = {
            sourceData: listResource,
            numColumns: 2
        }
        return (
            <View style={styles.container}>
                <AppFlatList {...flatListProps} />
                <Button title='Move to Article Container' onPress={() => { this.props.navigation.navigate('ArticleScreen') }} />
                <Button title='Go Back' onPress={() => { this.props.navigation.goBack() }} />
>>>>>>> Stashed changes
            </View>
        )
    }
}
