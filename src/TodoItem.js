import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class TodoItem extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content !== this.props.content) {
      return true;
    }
    return false;
  }

  render() {
    console.log('child render');
    return (
      <li
        onClick={ () => { this.props.handleDeleteItem(this.props.idx) } }
      >{ this.props.content }</li>
    )
  }
}

// // 函数式改写
// import React from 'react';
// import PropTypes from 'prop-types';

// function TodoItem(props) {
//   return (
//     <li
//       onClick={ () => { props.handleDeleteItem(props.idx) } }
//     >{ props.defaultProp }--{ props.content }</li>
//   )
// }

// // propTypes typechecking
// TodoItem.propTypes = {
//   handleDeleteItem: PropTypes.func,
//   idx: PropTypes.number,
//   content: PropTypes.string,
//   defaultProp: PropTypes.string.isRequired,
// };

// // define default values for props
// TodoItem.defaultProps = {
//   defaultProp: '默认prop'
// }

export default TodoItem;
