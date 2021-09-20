/**
 * Created by liliangshan on 2021/9/18
 */
import {lazy} from 'react';
import RouteView from "./RouteView";
import About from "@/containers/views/about";

const Home = lazy(() => import("@/containers/views/home"))
const NotFound = lazy(() => import("@/containers/views/404"))

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/about/introduction',
    component: About.Introduction,
  },
  {
    path: '/about/recruitment',
    component: About.Recruitment,
  },
  {
    path: '/404',
    component: NotFound,
  },
  {
    path: '/404',
    redirectOnly: true
  }
];

export default <RouteView data={routes}/>;
