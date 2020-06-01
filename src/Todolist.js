import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { changeInputValueAction, addItemAction, deleteItemAction } from './store/actionCreator';

function Todolist(props) {

  const { inputVal, handleInputChange, handleClick, list, handleDelete } = props;

  function renderList() {
    return list.map((item, index) => {
      return (
        <li
          key={ index }
          onClick={ () => { handleDelete(index) } }
        >{ item }</li>
      )
    })
  }

  return (
    <Fragment>
      <div>
        <input value={ inputVal } onChange={ handleInputChange } />
        <button onClick={ handleClick }>提交</button>
      </div>
      <ul>{ renderList() }</ul>
    </Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    inputVal: state.inputVal,
    list: state.list,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange(e) {
      const action = changeInputValueAction(e.target.value);
      dispatch(action);
    },
    handleClick() {
      const action = addItemAction();
      dispatch(action);
    },
    handleDelete(index) {
      const action = deleteItemAction(index);
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todolist);
