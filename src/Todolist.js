import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store';

class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
  }
  render() {
    return (
      <Fragment>
        <div>
          <Input placeholder={ this.state.inputVal } style={{ width: '300px', margin: '10px' }}></Input>
          <Button type='primary'>提交</Button>
        </div>
        <List
          bordered
          dataSource={ this.state.list }
          renderItem={ item => ( <List.Item>{ item }</List.Item> ) }
          style={{ width: '380px', marginLeft: '10px' }}
        ></List>
      </Fragment>
    )
  }
}

export default Todolist;
