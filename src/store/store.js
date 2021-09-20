/**
 * Created by liliangshan on 2021/9/14
 */

import {createStore, applyMiddleware, compose} from 'redux';
import thunk from "redux-thunk";
import {history} from './history'
import {LoggerAction} from './middleware'
import {routerMiddleware} from 'connected-react-router'
import {createRootReducer} from '../reducers'


const initState = {};
const enhancers = [];
const middlewares = [thunk, routerMiddleware(history)]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }

}

const composedEnhancers = compose(
  applyMiddleware(...middlewares, LoggerAction),
  ...enhancers
)

export const store = createStore(
  createRootReducer(history),
  initState,
  composedEnhancers
)
