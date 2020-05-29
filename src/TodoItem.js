// import React, { Component } from 'react';

// class TodoItem extends Component {
//   render() {
//     return (
//       <li
//         onClick={ () => { this.props.handleDeleteItem(this.props.idx) } }
//       >{ this.props.content }</li>
//     )
//   }
// }

// 函数式改写
import React from 'react';

function TodoItem(props) {
  return (
    <li
      onClick={ () => { props.handleDeleteItem(props.idx) } }
    >{ props.content }</li>
  )
} 

export default TodoItem;
