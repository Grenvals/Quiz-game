import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddlware from 'redux-saga';
import { quizReducer } from './reducers/quizReducer';
import { watchLoadData } from './sagas/sagas';

const sagaMiddleware = createSagaMiddlware();

const redusers = combineReducers({
  quiz: quizReducer,
});

export const store = createStore(redusers, compose(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watchLoadData);
