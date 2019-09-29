import { put, all , takeLatest } from 'redux-saga/effects'


function* fetchApiArticle(action){
    const data = yield fetch(action.url)
    .then(response => response.json(),);


    
    yield put({type: 'GET_DATA_ARTICLE', data: data.sources})
    //alert('allllooo')

  //  const data = respond.json();
   
    
}

export default function* actionWatcher(){
    yield takeLatest('LOAD_DATA_ARTICLE', fetchApiArticle)
}


