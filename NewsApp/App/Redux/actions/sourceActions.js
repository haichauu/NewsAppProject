export const loadDataSource = () => {
    return {
        type: 'LOAD_DATA_SOURCE'
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
