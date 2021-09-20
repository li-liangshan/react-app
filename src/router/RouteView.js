/**
 * Created by liliangshan on 2021/9/18
 */
import React, {Component, Suspense} from "react";
import {Redirect, Route, Switch} from 'react-router-dom';
import ProgressBar from "../components/progress";

export default class RouteView extends Component {

  render() {
    const {data} = this.props;
    return (
      <Suspense fallback={<ProgressBar/>}>
        <Switch>
          {
            data.map(item => {
              if (item.redirectOnly) {
                return (
                  <Redirect to={item.path} key={item.path}/>
                )
              } else if (item.redirect) {
                return (
                  <Route exact path={item.path} key={item.path}>
                    <Redirect to={item.redirect}/>
                  </Route>
                )
              } else {
                return (
                  <Route path={item.path} component={item.component} key={item.path}/>
                )
              }
            })
          }
        </Switch>
      </Suspense>
    )
  }

}
