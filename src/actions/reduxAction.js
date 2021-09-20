/**
 * Created by liliangshan on 2021/9/19
 */
import {createAction, createActions} from "redux-actions";

export const REDUX_ACTION_INCREMENT = "REDUX_ACTION_INCREMENT";
export const reduxActionIncrement = createAction(REDUX_ACTION_INCREMENT);


export const REDUX_ACTION_ADD = "reduxActionAdd";
export const REDUX_ACTION_REMOVE = "reduxActionRemove";
export const REDUX_ACTION_ADD_REMOVE_I = "reduxActionAddRemoveI";
export const REDUX_ACTION_ADD_REMOVE_II = "reduxActionAddRemoveII";

export const {reduxActionAdd, reduxActionRemove, reduxActionAddRemoveI, reduxActionAddRemoveII} =
  createActions({
    [REDUX_ACTION_ADD]: todo => ({todo}), // payload creator
    [REDUX_ACTION_REMOVE]: [
      todo => ({todo}), // payload creator
      (todo, warn) => ({todo, warn}) // meta
    ],
    [REDUX_ACTION_ADD_REMOVE_I]: todo => ({todo}),
    [REDUX_ACTION_ADD_REMOVE_II]: todo => ({todo}),
  });

export const actionFn = fn => args => dispatch => {
  dispatch(fn(args))
}
