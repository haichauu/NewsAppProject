import { all } from 'redux-saga/effects'
import sourceSaga from './SourceSaga';
import articleSaga from './ArticleSaga'


export default function* rootSaga(){
    yield all([
        sourceSaga(),
        articleSaga(),
    ])
}
