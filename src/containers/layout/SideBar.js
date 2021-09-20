/**
 * Created by liliangshan on 2021/9/17
 */
import React, {Component} from "react";
import {NavLink, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {Layout, Menu} from "antd";
import menu from "./menu";

class SideBar extends Component {

  render() {
    const {collapsed, location} = this.props;
    const defaultSelectedKey = location.pathname;
    const defaultOpenKey = '/' + location.pathname.split('/')[1];
    return (
      <Layout.Sider
        className="site-side"
        trigger={null}
        collapsible collapsed={collapsed}>
        <div className="logo"/>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[defaultSelectedKey]}
          defaultOpenKeys={[defaultOpenKey]}>
          {menu.map(item => {
            return (
              item.children && item.children.length > 0 ?
                <Menu.SubMenu key={item.path} icon={<item.icon/>} title={item.title}>
                  {
                    item.children.map(it => {
                      return (
                        <Menu.Item key={it.path}>
                          <NavLink to={it.path}>{it.title}</NavLink>
                        </Menu.Item>
                      )
                    })
                  }
                </Menu.SubMenu>
                :
                <Menu.Item key={item.path} icon={<item.icon/>}>
                  <NavLink to={item.path}>{item.title}</NavLink>
                </Menu.Item>
            )
          })}
        </Menu>
      </Layout.Sider>
    );
  }

}

const mapStateToProps = (state) => ({
  collapsed: state.collapsed
})

export default connect(mapStateToProps)(withRouter(SideBar));
