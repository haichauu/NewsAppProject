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
        const {data} = this.props.newProps;
        const flatListProps = {
            sourceData: data,
            numColumns: 2,
            onPressItem: this.props.navigation
        }
        return (
            <View style={styles.container}>
                {this.props.newProps.isLoading ? <ActivityIndicator color='pink'/> : null}
                <AppFlatList {...flatListProps} />
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
})

export default connect(mapStateToProps, mapDispatchToProps)(SourceContainer);