import React, { Component } from 'react'
import { View, Button, FlatList, Text, ActivityIndicator } from 'react-native'
import styles from './Styles/SourceContainerStyle'
import AppText from '../Components/Common/AppText'
import SourceItem from '../Components/Source/SourceItem';
import AppFlatList from '../Components/Common/AppFlatList';
import {connect} from 'react-redux';




class SourceContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listResource: []
        }
    }

    componentDidMount = () => {
       this.props.LoadDataSoure;
       this.props.loadDataArticle
      // this.props.GetData;
    }

    render() {
        //console.log(this.props.isLoadingDataSource)
        //alert(this.props.stateArticle.isLoading)
       // console.log(this.props.newProps)
        const {listResource} = this.state
        const {data} = this.props.newProps;
        const flatListProps = {
            sourceData: data,
            numColumns: 2
        }
        return (
            <View style={styles.container}>
                {this.props.newProps.isLoading ? <ActivityIndicator color='pink'/> : null}
                <AppFlatList {...flatListProps} />
                <Button title='Move to Article Container' onPress={() => { this.props.navigation.navigate('ArticleScreen') }} />
                <Button title='Go Back' onPress={() => { this.props.navigation.goBack() }} />
            </View>
        )
    }
}

mapStateToProps = (state) => ({
    newProps : state.stateSource,
    //dataSource: state.dataSource,
    stateArticle: state.stateArticle
})

mapDispatchToProps = (dispatch) => ({
    LoadDataSoure : dispatch({type: 'LOAD_DATA_SOURCE'}),
    loadDataArticle: dispatch({type: 'LOAD_DATA_ARTICLE', url: 'https://newsapi.org/v1/sources?language=en'})
    //GetData: dispatch({type: 'GET_DATA_SOURCE', data: list})
})

export default connect(mapStateToProps, mapDispatchToProps)(SourceContainer);