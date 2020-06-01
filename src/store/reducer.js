/**
 * @desc reducer
 */
import {ADD_LIST_ITEM, CHANGE_INPUT_VALUE, DELETE_LIST_ITEM, INIT_LIST_ACTION} from './actionTypes';

// 默认 state
const defaultState = {
  inputVal: '',
  list: [],
};

function reducer(prevState = defaultState, action) {
  
  // 注意我们只利用深拷贝操作状态池的副本，避免直接操作状态池造成不可预期的BUG
  const newState = JSON.parse(JSON.stringify(prevState));

  const type = action.type;

  switch (type) {
    case ADD_LIST_ITEM:
      newState.list.push(newState.inputVal);
      newState.inputVal = '';
      return newState;
    case CHANGE_INPUT_VALUE:
      newState.inputVal = action.value;
      return newState;
    case DELETE_LIST_ITEM:
      newState.list.splice(action.index, 1);
      return newState;
    case INIT_LIST_ACTION:
      newState.list = action.data;
      return newState;
    default:
      break;
  }

  // 初始化或都没命中则返回默认值
  return prevState;
}

export default reducer;
