import React, { Component } from 'react';
import { WebView } from 'react-native-webview'

export default class NewsDetail extends Component {

    static navigationOptions = ({ navigation }) => {
        const titleName = navigation.getParam('name', null)
        return {
            title: titleName
        }
    }

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount = () => {
        const { navigation } = this.props
        const url = navigation.getParam('url', null)
        this.setState({ url: url})
    }

    render() {
        const { url } = this.state
        return (
            <WebView source={{ uri: url }} />
        );
    }
}
