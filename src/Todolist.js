import React, { Component, Fragment } from 'react';
import store from './store';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import { handleInputChangeAction, handleBtnClickAction, handleDeleteAction } from './store/actionCreator';

class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    // 绑定this
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
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
      <Fragment>
        <div>
          <Input
            value={ this.state.inputVal }
            style={{ width: '300px', margin: '10px' }}
            onChange={ this.handleInputChange }
          ></Input>
          <Button
            type='primary'
            onClick={ this.handleBtnClick }
          >提交</Button>
        </div>
        <List
          bordered
          dataSource={ this.state.list }
          renderItem={ (item, index) => ( <List.Item onClick={ this.handleDelete.bind(this, index) }>{ item }</List.Item> ) }
          style={{ width: '380px', marginLeft: '10px' }}
        ></List>
      </Fragment>
    )
  }
}

export default Todolist;
