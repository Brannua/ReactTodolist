/**
 * @desc actionCreator
 */
import {ADD_LIST_ITEM, CHANGE_INPUT_VALUE, DELETE_LIST_ITEM} from './actionTypes';

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
