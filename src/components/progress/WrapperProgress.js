/**
 * Created by liliangshan on 2021/9/18
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux'
import {Actions} from "@/actions";


const WrapperProgress = (Element) => {

  class In extends Component {

    constructor(props) {
      super(props);
      props.setProgress(0);
    }

    componentDidMount() {
      this.props.setProgress(0);
      setTimeout(() => {
        this.props.setProgress(50);
      });
      setTimeout(() => {
        this.props.setProgress(99.9);
      }, 600);
      setTimeout(() => {
        this.props.setProgress(100);
      }, 1200);
    }

    render() {
      return (<Element {...this.props} />);
    }

  }

  const mapStateToProps = (state) => ({
    progress: state.progress
  })

  const mapDispatchToProps = (dispatch) => bindActionCreators({
    setProgress: Actions.updateProgress,
  }, dispatch)

  return connect(mapStateToProps, mapDispatchToProps)(In)

}

export default WrapperProgress;
