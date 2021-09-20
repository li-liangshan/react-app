/**
 * Created by liliangshan on 2021/9/14
 */
import {combineReducers} from 'redux'
import {counter} from "./counter";
import {collapsed, progress} from "./common";
import {updateHomeContent} from "./home";
import {connectRouter} from 'connected-react-router'
import {actionReducer, actionReducers} from "./reduxActionReducer";

export const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  counter,
  collapsed,
  progress,
  updateHomeContent,
  actionReducer,
  actionReducers,
})
