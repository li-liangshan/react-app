/**
 * Created by liliangshan on 2021/9/17
 */
import React, {Component} from "react";
import {Layout} from "antd";
import PanelRouteView from '@/router/panel'
import Header from "@/containers/layout/Header"
import SideBar from "@/containers/layout/SideBar";


class Panel extends Component {

  render() {
    return(
      <Layout className="site-layout">
        <SideBar/>
        <Layout className="site-body">
          <Header/>
          <Layout.Content className="site-content">
            {PanelRouteView}
          </Layout.Content>
        </Layout>
      </Layout>
    )
  }

}

export default Panel;
