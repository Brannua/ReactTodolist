import React, { Fragment, Component } from 'react';
import TodoItem from './TodoItem'

class Todolist extends Component {
  constructor(props) {
    super(props);
    // 给函数绑作用域全部在constructor中处理
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    // state
    this.state = {
      inputVal: '',
      list: [],
    };
  }

  handleInputChange(e) {
    let val = e.target.value;
    this.setState(() => {
      return {
        inputVal: val,
      }
    });
  }

  handleSubmit() {
    this.setState((prevState) => {
      return {
        inputVal: '',
        list: [...prevState.list, prevState.inputVal],
      }
    });
  }

  handleDeleteItem(index) {
    // set-data --> re-render
    this.setState((prevState) => {
      // immutable原则，不允许直接操作state，操作其副本
      const newList = [...prevState.list];
      newList.splice(index, 1);
      return {
        list: newList,
      }
    });
  }

  getItems() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={ item }
          idx={ index }
          content={ item }
          handleDeleteItem={ this.handleDeleteItem }
        />
      ) 
    });
  }

  render() {
    return (
      <Fragment>
        <div>
          <input
            value={ this.state.inputVal }
            onChange={ this.handleInputChange }
          ></input>
          <button onClick={ this.handleSubmit }>提交</button>
        </div>
        <ul>
          { this.getItems() }
        </ul>
      </Fragment>
    );
  }
}

export default Todolist;
