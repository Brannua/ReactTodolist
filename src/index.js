import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Todolist from './Todolist';
import store from './store';

const App = (
  <Provider store={ store }>
    <Todolist/>
  </Provider>
);

ReactDOM.render(
  App,
  document.getElementById('root')
);
