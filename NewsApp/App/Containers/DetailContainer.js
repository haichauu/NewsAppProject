import React, { Component } from 'react'
import {WebView} from 'react-native-webview'


export default class DetailContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            url: ''
        }
    }

    componentDidMount = () => {
        const {navigation} = this.props
        const url = navigation.getParam('url', '')
        this.setState({url: url})
    }

    render() {
        const {url} = this.state
        return (
                <WebView 
                    source={{uri: url}} />
        )
    }
}
