import { takeEvery, put } from 'redux-saga/effects';
import { GET_LIST_ACTION } from './actionTypes';
import { initListAcion } from './actionCreator';
import axios from 'axios';

// 异步逻辑
function* getList() {
  try {
    const { data } = yield axios.get('/mock/data.json');
    const action = initListAcion(data);
    yield put(action);
  } catch (error) {
    console.error('@/sagas.js: list.json 网络请求失败.');
  }
}

function* TodolistSagas() {
  yield takeEvery(GET_LIST_ACTION, getList);
}

export default TodolistSagas;
