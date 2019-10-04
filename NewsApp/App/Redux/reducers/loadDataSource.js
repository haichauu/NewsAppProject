import constant from '../constants/'

const defaultState = {
    isLoading: false
}

const loadingData = (state = defaultState, action) => {
    switch(action.type){
        case constant.LoadDataSource:
            return {...state, isLoading: true};
        case constant.GetDataSourceSuccess:
            return {data: action.data, isLoading: false}
        case constant.GetDataSourceFailure:
            return {isLoading: false}
        default:
            return state;
    }

}

export default loadingData;