import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';

const data = [
  'sdfghjk',
  'sdfghjk',
  'sdfghjk',
  'sdfghjk',
];

class Todolist extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <Input placeholder='todo info' style={{ width: '300px', margin: '10px' }}></Input>
          <Button type='primary'>提交</Button>
        </div>
        <List
          bordered
          dataSource={ data }
          renderItem={ item => ( <List.Item>{ item }</List.Item> ) }
          style={{ width: '380px', marginLeft: '10px' }}
        ></List>
      </Fragment>
    )
  }
}

export default Todolist;
