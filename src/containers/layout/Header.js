/**
 * Created by liliangshan on 2021/9/17
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import {push} from "connected-react-router";
import {withRouter} from "react-router-dom";
import {Layout, Dropdown, Menu} from "antd";
import {MenuFoldOutlined, MenuUnfoldOutlined, CaretDownOutlined} from "@ant-design/icons";
import {bindActionCreators} from "redux";
import {Actions} from "@/actions";

class Header extends Component {

  menuClick = () => {
    this.props.changePage();
  }

  collapse = () => {
    this.props.collapse();
  }

  render() {
    const {collapsed} = this.props;
    const menu = (
      <Menu>
        <Menu.Item key="1" disabled>admin</Menu.Item>
        <Menu.Divider/>
        <Menu.Item key="2" onClick={this.menuClick}>退出登录</Menu.Item>
      </Menu>
    )
    return (
      <Layout.Header className="layout-header">
        {
          collapsed ?
            (<MenuUnfoldOutlined className="trigger" onClick={this.collapse}/>)
            : (<MenuFoldOutlined className="trigger" onClick={this.collapse}/>)
        }
        <Dropdown
          className="header-trigger-wrap"
          placement="bottomRight"
          arrow={true}
          overlay={menu}>
          <span className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            <img className="header-pic"
                 src="https://p3.toutiaoimg.com/origin/user-avatar/1ce93cae6da9004586e0eb7dbc4d1cfa" alt="头像"/>
            <CaretDownOutlined className="arrow-down-logo"/>
          </span>
        </Dropdown>
      </Layout.Header>
    );
  }

}

const mapStateToProps = (state) => ({
  collapsed: state.collapsed,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  collapse: Actions.collapse,
  changePage: () => push("/login"),
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header))
