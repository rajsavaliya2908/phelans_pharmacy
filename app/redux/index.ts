import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import state from '../redux/reducers/index';
import rootSaga from './sagas';

const GLOBAL_STATE = combineReducers(state);

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, logger];

const store = configureStore({
  reducer: GLOBAL_STATE,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(middlewares),
});
sagaMiddleware.run(rootSaga);
export type AppState = ReturnType<typeof GLOBAL_STATE>;
export {store};
