import { CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_IETM } from './actionTypes';

const defaultState = {
  inputVal: '',
  list: [],
};

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  const type = action.type;

  switch (type) {
    case CHANGE_INPUT_VALUE:
      newState.inputVal = action.inputVal;
      return newState;
    case ADD_ITEM:
      newState.list.push(newState.inputVal);
      newState.inputVal = '';
      return newState;
    case DELETE_IETM:
      newState.list.splice(action.index, 1);
      return newState;
    default:
      break;
  }

  return state;
}
