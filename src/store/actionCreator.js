/**
 * @desc actionCreator
 */
import {ADD_LIST_ITEM, CHANGE_INPUT_VALUE, DELETE_LIST_ITEM, INIT_LIST_ACTION, GET_LIST_ACTION} from './actionTypes';

export function handleInputChangeAction(value) {
  return {
    value,
    type: CHANGE_INPUT_VALUE
  }
}

export function handleBtnClickAction() {
  return {
    type: ADD_LIST_ITEM,
  }
}

export function handleDeleteAction(index) {
  return {
    index,
    type: DELETE_LIST_ITEM,
  }
}

export function initListAcion(data) {
  return {
    data,
    type: INIT_LIST_ACTION,
  }
}

export function getListAction() {
  return {
    type: GET_LIST_ACTION,
  }
}
