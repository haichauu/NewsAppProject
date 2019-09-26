import React, { Component } from 'react'
import { View, Button, ListRenderItem, FlatList, Text } from 'react-native'
import AppText from '../Components/Common/AppText'
import SourceItem from '../Components/Source/SourceItem';


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

    renderResourceItem = (item) => {
        const { name, description, url, category } = item;
        const props = {
            style: {
                margin: 5
            },
            name,
            description,
            urlWebsite: 'link',
            category
        }
        return (
            <SourceItem  key={item.id} {...props} />
        )
    }

    renderResource = () => {
        const { listResource } = this.state;
        return (
            <FlatList
                numColumns={2}
                data={listResource}
                renderItem={({ item }) => this.renderResourceItem(item)}
                // contentContainerStyle={{backgroundColor: 'orange', alignItems: "center", justifyContent: "center"}}

            />
        )
    }


    render() {
        const { listResource } = this.props;
        return (
            <View style={{ alignItems: "center", justifyContent: "center" , padding: 5 }}>
              
                    {this.renderResource()}

                <Button title='Move to Article Container' onPress={() => { this.props.navigation.navigate('ArticleScreen') }} />
                <Button title='Go Back' onPress={() => { this.props.navigation.goBack() }} />
            </View>
        )
    }
}
