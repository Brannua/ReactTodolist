/**
 * @desc reducer
 */
import {ADD_LIST_ITEM, CHANGE_INPUT_VALUE, DELETE_LIST_ITEM} from './actionTypes';

// 默认 state
const defaultState = {
  inputVal: '',
  list: [1, 2, 3],
};

// 注意我们只利用深拷贝操作状态池的副本，避免直接操作状态池造成不可预期的BUG
function reducer(prevState = defaultState, action) {
  const type = action.type;
  const newState = JSON.parse(JSON.stringify(prevState));

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
    default:
      break;
  }

  // 初始化或都没命中则返回默认值
  return prevState;
}

export default reducer;
