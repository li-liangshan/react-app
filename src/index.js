import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {ConnectedRouter} from "connected-react-router";
import Store from "./store";
import Container from './containers';
import './assets/css/index.scss';
import reportWebVitals from './reportWebVitals';

const target = document.querySelector('#root')

ReactDOM.render(
  <Provider store={Store.store}>
    <ConnectedRouter history={Store.history}>
      <Container/>
    </ConnectedRouter>
  </Provider>,
  target
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
