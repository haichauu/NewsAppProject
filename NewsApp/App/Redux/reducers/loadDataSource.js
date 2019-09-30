const defaultState = {
    isLoading: false
}

const loadingData = (state = defaultState, action) => {
    if(action.type ==='LOAD_DATA_SOURCE')
    {
        return {...state, isLoading: true};
    }
    if(action.type === 'GET_DATA_SOURCE')
    {
        return  {data: action.data, isLoading: false}
    }
    return state;

}

export default loadingData;