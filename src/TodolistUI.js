/**
 * @desc Todolist 的 UI 组件
 */

import React, { Fragment } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';

function TodolistUI(props) {
  return (
    <Fragment>
        <div>
          <Input
            value={ props.inputVal }
            style={{ width: '300px', margin: '10px' }}
            onChange={ props.handleInputChange }
          ></Input>
          <Button
            type='primary'
            onClick={ props.handleBtnClick }
          >提交</Button>
        </div>
        <List
          bordered
          dataSource={ props.list }
          renderItem={ item => ( <List.Item onClick={ (index) => { props.handleDelete(index) } }>{ item }</List.Item> ) }
          style={{ width: '380px', marginLeft: '10px' }}
        ></List>
      </Fragment>
  )
}

export default TodolistUI;
