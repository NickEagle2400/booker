import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import allReducers from './reducers';
import { Provider } from 'react-redux';

import './style.css'

const store = compose(applyMiddleware(thunk), window.devToolsExtension && window.devToolsExtension(),)(createStore)(allReducers);

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);


