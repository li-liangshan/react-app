/**
 * Created by liliangshan on 2021/9/19
 */
import {combineActions, handleAction, handleActions} from "redux-actions";
import {
  REDUX_ACTION_INCREMENT,
  REDUX_ACTION_ADD, REDUX_ACTION_REMOVE, reduxActionAddRemoveI, reduxActionAddRemoveII,
} from '../actions/reduxAction'

export const actionReducer = handleAction(REDUX_ACTION_INCREMENT,
  (state, action) => {
  const res = (state + (action.payload ? action.payload : 1));
  console.log("res:", res)
  return res;
  }, 0);

export const actionReducers = handleActions({
  [REDUX_ACTION_ADD]: (state, action) => ({
    todo: action.payload.todo,
  }),
  [REDUX_ACTION_REMOVE]: (state, action) => ({
    todo: action.payload.todo,
  }),
  // reduxActionAddRemoveI: (state, action) => ({
  //   todo: action.payload.todo,
  // }),
  // reduxActionAddRemoveII: (state, action) => ({
  //   todo: action.payload.todo,
  // }),
  [combineActions(reduxActionAddRemoveI, reduxActionAddRemoveII)]: (state, action) => {
    return {
      todo: action.payload.todo + " combine ddd",
    };
  }
}, {todo: ""});
