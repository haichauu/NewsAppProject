const defaultState = {
    isLoading: false

}

const loadingData = (state = defaultState, action) => {
    switch(action.type)
    {
        case 'LOAD_DATA_ARTICLE':
            return {...state, isLoading: true};
        case 'GET_DATA_ARTICLE_SUCCESS':
            return  {...state, data: action.data, isLoading: false};
        case 'GET_DATA_ARTICLE_FAILURE':
            return {...state, isLoading: false}
        default: 
            return state;

    }

}

export default loadingData;