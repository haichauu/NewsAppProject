const defaultState = {
    isLoading: false
}

const loadingData = (state = defaultState, action) => {
    // if(action.type ==='LOAD_DATA_SOURCE')
    // {
    //     return {...state, isLoading: true};
    // }
    // if(action.type === 'GET_DATA_SOURCE')
    // {
    //     return  {data: action.data, isLoading: false}
    // }
    // return state;
    switch(action.type){
        case 'LOAD_DATA_SOURCE':
            return {...state, isLoading: true};
        case 'GET_DATA_SOURCE_SUCCESS':
            return {data: action.data, isLoading: false}
        case 'GET_DATA_SOURCE_FAILURE':
            return {isLoading: false}
        default:
            return state;
    }

}

export default loadingData;