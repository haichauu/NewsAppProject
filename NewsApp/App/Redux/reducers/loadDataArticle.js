const defaultState = {
    isLoading: false

}

const loadingData = (state = defaultState, action) => {
    if(action.type ==='LOAD_DATA_ARTICLE')
    {
        return {...state, isLoading: true};
    }
    if(action.type === 'GET_DATA_ARTICLE')
    {
        return  {data: action.data, isLoading: false}
    }
    return state;

}

export default loadingData;