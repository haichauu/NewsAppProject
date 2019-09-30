import { put, all , takeLatest } from 'redux-saga/effects'


function* fetchApiSouce(){
    const data = yield fetch('https://newsapi.org/v1/sources?language=en')
    .then(response => response.json(),);

    yield put({type: 'GET_DATA_SOURCE', data: data.sources})
    //console.log(data, 'fine')

  //  const data = respond.json();
   
    
}

export default function* actionWatcher(){
    yield takeLatest('LOAD_DATA_SOURCE', fetchApiSouce,)
}


