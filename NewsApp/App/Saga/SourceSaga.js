import { put, call, takeLatest } from 'redux-saga/effects'
import {getDataSourceSuccess, getDataSourceFailure} from '../Redux/actions/sourceActions'
import {getDataSource} from '../Services/Apis/ApiSource'
import constants from '../Redux/constants'

const url = 'https://newsapi.org/v1/sources?language=en'

function* fetchApiSouce(){
  try {
    const respond = yield call(getDataSource, url)
    yield put(getDataSourceSuccess(respond.sources))
  }
  catch (e) {
    yield put(getDataSourceFailure(e))
  } 
}

export default function* actionWatcher(){
    yield takeLatest(constants.LoadDataSource, fetchApiSouce)
}


