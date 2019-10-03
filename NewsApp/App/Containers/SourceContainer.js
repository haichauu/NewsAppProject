import React, { Component } from 'react'
import { View, Button, FlatList, Text, ActivityIndicator } from 'react-native'
import styles from './Styles/SourceContainerStyle'
import AppText from '../Components/Common/AppText'
import SourceItem from '../Components/Source/SourceItem';
import AppFlatList from '../Components/Common/AppFlatList';
import {connect} from 'react-redux';
import AppIndicator from '../Components/Common/AppIndicator';
import {loadDataSource}  from '../Redux/actions/sourceActions'




class SourceContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount = () => {
       this.props.LoadDataSoure;
       console.log(this.props.newProps)

    }


    render() {
        const {data, isLoading} = this.props.newProps;
        const flatListProps = {
            sourceData: data,
            numColumns: 2,
            onPressItem: this.props.navigation
        }
        return (
            <View style={styles.container}>
                <AppIndicator show={isLoading} />
                {!isLoading && <AppFlatList {...flatListProps} />}
            </View>
        )
    }
}

mapStateToProps = (state) => ({
    newProps : state.stateSource,
   
})

mapDispatchToProps = (dispatch) => ({
    LoadDataSoure : dispatch(loadDataSource()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SourceContainer);