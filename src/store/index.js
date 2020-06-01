/**
 * @desc store
 * https://github.com/zalmoxisus/redux-devtools-extension
 */

import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import TodolistSagas from './sagas';

// 生成构造增强器的函数
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// 生成增强器
const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware),
);

// 使用(reducer & 增强器)来初始化创建store
const store = createStore(
  reducer,
  enhancer
);

// then run the saga
sagaMiddleware.run(TodolistSagas);

export default store;
