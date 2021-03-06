import React from 'react';
import {render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'; 
import gameOfLifeApp from './reducers'; 
import App from './App';
import './index.css';

let store = createStore(gameOfLifeApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);
