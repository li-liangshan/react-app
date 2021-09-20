/**
 * Created by liliangshan on 2021/9/17
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Actions} from '../../../actions';
import {getHomeData} from "@/api";


class Home extends Component {

  componentDidMount() {
    getHomeData({}).then((res) => this.props.update(JSON.stringify(res)));
  }

  render() {
    const {content} = this.props;
    return (
      <div>
        <h1>欢迎来到这里！！！</h1>
        <p>{content}</p>
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  content: state.updateHomeContent,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    update: Actions.updateHomeContent,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)

