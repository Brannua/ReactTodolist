import React from 'react';  // 只有引入'react'包才可以编译JSX语法
import ReactDOM from 'react-dom';
import Todolist from './Todolist';

ReactDOM.render(
  <React.StrictMode>
    <Todolist/>
  </React.StrictMode>,
  document.getElementById('root')
);
