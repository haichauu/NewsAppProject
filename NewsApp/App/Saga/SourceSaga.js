import { put, call, takeLatest } from 'redux-saga/effects'
import {getDataSourceSuccess, getDataSourceFailure} from '../Redux/actions/sourceActions'
import {getDataSource} from '../Services/Apis/ApiSource'
import constants from '../Redux/constants'


function* fetchApiSouce(action){
  try {
    const respond = yield call(getDataSource, action.name, action.params)
    yield put(getDataSourceSuccess(respond.sources))
  }
  catch (e) {

    yield put(getDataSourceFailure(e))
  } 
}

export default function* actionWatcher(){
    yield takeLatest(constants.LoadDataSource, fetchApiSouce)
}


