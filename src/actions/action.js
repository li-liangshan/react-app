/**
 * Created by liliangshan on 2021/9/14
 */
import {
  INCREMENT_REQUESTED,
  INCREMENT,
  DECREMENT_REQUESTED,
  DECREMENT,
  COLLAPSED,
  PROGRESS,
  HOME_CONTENT,
} from "./actionTypes";

export const increment = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED
    })

    dispatch({
      type: INCREMENT
    })
  }
}

export const incrementAsync = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: INCREMENT
      })
    }, 3000)
  }
}

export const decrement = () => {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED
    })

    dispatch({
      type: DECREMENT
    })
  }
}

export const decrementAsync = () => {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: DECREMENT
      })
    }, 3000)
  }
}

export const collapse = () => {
  return dispatch => {
    dispatch({
      type: COLLAPSED
    })
  }
}

export const updateProgress = (data) => {
  return dispatch => {
    dispatch({
      type: PROGRESS,
      progress: data,
    })
  }
}

export const updateHomeContent = (data) => {
  return dispatch => {
    dispatch({
      type: HOME_CONTENT,
      content: data,
    })
  }
}

