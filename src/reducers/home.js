/**
 * Created by liliangshan on 2021/9/18
 */
import {ActionTypes} from '../actions';

const initHomeContent = "";

export const updateHomeContent = (state = initHomeContent, action) => {
  const { type, content } = action;
  if (type === ActionTypes.HOME_CONTENT) {
    console.log("content===>", content)
    return content;
  }
  return state;
}
