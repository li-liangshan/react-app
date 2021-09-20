/**
 * Created by liliangshan on 2021/9/18
 */
import {request} from "./base";

export const getHomeData = (data) => {
  return request({
    url: '/api/manifest.json',
    method: 'get',
    data,
  });
}


