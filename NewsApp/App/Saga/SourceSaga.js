import { put, all , takeLatest } from 'redux-saga/effects'
import {getDataSourceSuccess} from '../Redux/actions/sourceActions'


function* fetchApiSouce(){
    const data = yield fetch('https://newsapi.org/v1/sources?language=en')
    .then(response => response.json(),);

    yield put(getDataSourceSuccess(data.sources));
    //console.log(data, 'fine')

  //  const data = respond.json();
   
    
}

export default function* actionWatcher(){
    yield takeLatest('LOAD_DATA_SOURCE', fetchApiSouce,)
}


