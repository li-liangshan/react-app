/**
 * Created by liliangshan on 2021/9/14
 */
import {combineReducers} from 'redux'
import {counter} from "./counter";
import {connectRouter} from 'connected-react-router'

export const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  counter,
})
