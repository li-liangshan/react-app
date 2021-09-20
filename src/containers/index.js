/**
 * Created by liliangshan on 2021/9/14
 */

import React, {Component} from "react";
import RootRouteView from '@/router';
import ProgressBar from "@/components/progress";

export default class Container extends Component {

  render() {
    return (
      <div className='body-panel'>
        <ProgressBar/>
        {RootRouteView}
      </div>
    );
  }

}
