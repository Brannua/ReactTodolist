/**
 * @desc store
 * https://github.com/zalmoxisus/redux-devtools-extension
 */

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

// 生成构造增强器的函数
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

// 生成增强器
const enhancer = composeEnhancers(
  applyMiddleware(thunk),
);

// 使用(reducer & 增强器)来初始化创建store
const store = createStore(
  reducer,
  enhancer
);

export default store;
