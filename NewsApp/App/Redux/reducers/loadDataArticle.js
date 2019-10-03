import constants from '../constants'

const defaultState = {
    isLoading: false

}

const loadingData = (state = defaultState, action) => {
    switch(action.type)
    {
        case constants.LoadDataArticle:
            return {...state, isLoading: true};
        case constants.GetDataArticleSuccess:
            return  {...state, data: action.data, isLoading: false};
        case constants.GetDataArticleFailure:
            return {...state, isLoading: false}
        default: 
            return state;

    }

}

export default loadingData;