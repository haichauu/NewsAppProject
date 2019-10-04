import React, { Component } from 'react'
import {View } from 'react-native'
import AppFlatList from '../Components/Common/AppFlatList';
import styles from './Styles/ArticleContainerStyle'
import {connect} from 'react-redux';
import AppIndicator from '../Components/Common/AppIndicator';
import {loadDataArticle} from '../Redux/actions/articleActions'

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
        const {navigation} = this.props
        const flatListProps = {
            articleData: data,
            onPressItem: navigation
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

mapStateToProps = (state) => ({
    stateArticle: state.stateArticle
})

mapDispatchToProps = (dispatch) => ({
    loadDataArticle: (sourceId) => dispatch(loadDataArticle(sourceId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticleContainer);