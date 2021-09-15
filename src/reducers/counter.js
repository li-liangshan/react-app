/**
 * Created by liliangshan on 2021/9/14
 */
import {ActionTypes} from '../actions'

const initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false
}

export const counter = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.INCREMENT_REQUESTED:
      return {
        ...state,
        isIncrementing: true
      }

    case ActionTypes.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        isIncrementing: !state.isIncrementing
      }

    case ActionTypes.DECREMENT_REQUESTED:
      return {
        ...state,
        isDecrementing: true
      }

    case ActionTypes.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
        isDecrementing: !state.isDecrementing
      }

    default:
      return state
  }
}
