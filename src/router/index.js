/**
 * Created by liliangshan on 2021/9/18
 */
import {lazy} from 'react';
import Panel from "../containers/views"
import RouteView from "./RouteView";

const Login = lazy(() => import("../containers/login"))
const routes = [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/',
    component: Panel
  }
];

export default <RouteView data={routes}/>
