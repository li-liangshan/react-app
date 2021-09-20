/**
 * Created by liliangshan on 2021/9/17
 */

import {ActionTypes} from '../actions'

const collapsedState = false;
const progressInitState = 0;

export const collapsed = (state = collapsedState, action) => {
  const {type} = action;
  if (type === ActionTypes.COLLAPSED) {
    return !state;
  }
  return state;
}

export const progress = (state = progressInitState, action) => {
  const {type, progress} = action;
  if (type === ActionTypes.PROGRESS) {
    return progress;
  }
  return progressInitState;
}


