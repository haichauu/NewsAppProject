import {combineReducers} from 'redux';
import loadDataSource from './loadDataSource';
import loadDataArticle from './loadDataArticle'
import NavigationRedux from './NavigationRedux'



const reducer = combineReducers({
    stateSource: loadDataSource,
    stateArticle: loadDataArticle,
    navigationApp: NavigationRedux,

});

export default reducer;