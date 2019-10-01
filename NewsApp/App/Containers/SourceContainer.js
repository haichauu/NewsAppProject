import React, { Component } from 'react'
import { View, Button, FlatList, Text, ActivityIndicator } from 'react-native'
import styles from './Styles/SourceContainerStyle'
import AppText from '../Components/Common/AppText'
import SourceItem from '../Components/Source/SourceItem';
import AppFlatList from '../Components/Common/AppFlatList';
import {connect} from 'react-redux';
import AppIndicator from '../Components/Common/AppIndicator';




class SourceContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount = () => {
       this.props.LoadDataSoure;

    }


    render() {
        const {data} = this.props.newProps;
        const flatListProps = {
            sourceData: data,
            numColumns: 2,
            onPressItem: this.props.navigation
        }
        return (
            <View style={styles.container}>
                <AppIndicator show={data.isLoading} />
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