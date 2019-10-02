import React, { Component } from 'react'
import { Text, View, Button, ActivityIndicator } from 'react-native'
import AppFlatList from '../Components/Common/AppFlatList';
import styles from './Styles/ArticleContainerStyle'
import {connect} from 'react-redux';
import AppIndicator from '../Components/Common/AppIndicator';

class ArticleContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sourceId: null,
        }
    }

    UNSAFE_componentWillMount = () => {
        const {navigation} = this.props
        const sourceId = navigation.getParam('id', null)
        this.setState({sourceId: sourceId})
    }

    componentDidMount = () => {
        this.props.loadDataArticle(this.state.sourceId)
    }

    render() {

        const {data, isLoading} = this.props.stateArticle
        const flatListProps = {
            articleData: data,
            onPressItem: this.props.navigation
        }
        console.log(data)
        return (
            <View style={styles.container}>
                <AppIndicator show={isLoading} />
                {!isLoading && <AppFlatList {...flatListProps} />}
            </View>
        )
    }
}

mapDispatchToProps = (state) => ({
    stateArticle: state.stateArticle
})

mapDispatchToProps = (dispatch) => ({
    loadDataArticle: (sourceId) => dispatch({type: 'LOAD_DATA_ARTICLE', url: 'https://newsapi.org/v1/articles?source=' + sourceId + '&apiKey=8acf329a8769447e9bc1c73cb0e76d7d'})
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticleContainer);