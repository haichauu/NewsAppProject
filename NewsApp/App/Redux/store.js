import {createStore, applyMiddleware} from 'redux';

import reducer from './reducers/reducer';
import {logger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../Saga/index'

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleWare, logger)
    );

sagaMiddleWare.run(rootSaga);

export default store;