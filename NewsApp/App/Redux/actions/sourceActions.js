import constant from '../constants'

export const loadDataSource = () => {
    return {
        type: constant.LoadDataSource,
        name: 'sources',
        params: {
            language: 'en'
        }
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
