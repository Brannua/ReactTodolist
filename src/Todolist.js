import React, { Component } from 'react';
import TodolistUI from './TodolistUI';
import store from './store';
import { handleInputChangeAction, handleBtnClickAction, handleDeleteAction } from './store/actionCreator';

class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    // 绑定this
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    // 发布订阅模式
    store.subscribe(this.handleStoreChange);
  }

  // store改变，触发重新渲染
  handleStoreChange() {
    this.setState(
      store.getState()
    );
  }

  handleInputChange(e) {
    const action = handleInputChangeAction(e.target.value);
    store.dispatch(action);
  }

  handleBtnClick() {
    const action = handleBtnClickAction();
    store.dispatch(action);
  }

  handleDelete(index) {
    const action = handleDeleteAction(index);
    store.dispatch(action);
  }

  render() {
    return (
      <TodolistUI
        inputVal={ this.state.inputVal }
        handleInputChange={ this.handleInputChange }
        handleBtnClick={ this.handleBtnClick }
        list={ this.state.list }
        handleDelete={ this.handleDelete }
      />
    )
  }
}

export default Todolist;
