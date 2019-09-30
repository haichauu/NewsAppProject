import {combineReducers} from 'redux';
import loadDataSource from './loadDataSource';
import loadDataArticle from './loadDataArticle'



const reducer = combineReducers({
    stateSource: loadDataSource,
    stateArticle: loadDataArticle
    

});

export default reducer;