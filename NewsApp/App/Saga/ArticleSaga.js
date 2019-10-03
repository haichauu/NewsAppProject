import { put, all, call, takeLatest } from 'redux-saga/effects'
import { getArticleDataSuccess, getAricleDataFailure } from '../Redux/actions/articleActions'
import { getDataArticle } from '../Services/Apis/ApiArticle'
import constants from '../Redux/constants'


function* fetchApiArticle(action) {

    try {
        const respond = yield call(getDataArticle, action.url);
        yield put(getArticleDataSuccess(respond.articles))
    }
    catch (e) {
        yield put(getAricleDataFailure(e))
    }


}

export default function* actionWatcher() {
    yield takeLatest(constants.LoadDataArticle, fetchApiArticle)
}


