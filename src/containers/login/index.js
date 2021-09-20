/**
 * Created by liliangshan on 2021/9/17
 */
import React, {Component} from "react";
import {push} from "connected-react-router";
import {connect} from "react-redux";
import {Form, Input, Button, message} from "antd";
import {bindActionCreators} from "redux";

class Login extends Component {

  onFinish = (values) => {
    if (values.username === 'admin' && values.password === 'admin') {
      this.props.forwardHome();
      return;
    }
    message.error('用户名或密码错误');
  }

  render() {
    return (
      <Form
        className="login-form-warp"
        name="basic"
        labelCol={{span: 5}}
        initialValues={{remember: true}}
        onFinish={this.onFinish}>
        <Form.Item label="用户名" name="username" rules={[{required: true, message: '请输入用户名(admin)'}]}>
          <Input/>
        </Form.Item>
        <Form.Item label="密码" name="password" rules={[{required: true, message: '请输入密码'}]}>
          <Input.Password/>
        </Form.Item>
        <Form.Item wrapperCol={{offset: 10}}>
          <Button type="primary" htmlType="submit">登录</Button>
        </Form.Item>
      </Form>
    );
  }

}

const mapDispatchToProps = dispatch => bindActionCreators({
  forwardHome: () => push("/home")
}, dispatch)

export default connect(null, mapDispatchToProps)(Login)
