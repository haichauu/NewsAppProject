import constant from '../constants'

export const loadDataSource = () => {
    return {
        type: constant.LoadDataSource
    }
}

export const getDataSourceSuccess = (data) => {
    return{
        type: 'GET_DATA_SOURCE_SUCCESS',
        data
    }
}


export const getDataSourceFailure = () => {
    return{
        type: 'GET_DATA_SOURCE_FAILURE'
    }
    
}
