/**
 * Created by liliangshan on 2021/9/18
 */

export const LoggerAction = () => next => action => {
  // console.log(action);
  return next(action);
}
