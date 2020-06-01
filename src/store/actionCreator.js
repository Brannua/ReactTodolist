import { CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_IETM } from './actionTypes';

export function changeInputValueAction(inputVal) {
  return {
    inputVal,
    type: CHANGE_INPUT_VALUE,
  }
}

export function addItemAction() {
  return {
    type: ADD_ITEM,
  }
}

export function deleteItemAction(index) {
  return {
    index,
    type: DELETE_IETM,
  }
}
