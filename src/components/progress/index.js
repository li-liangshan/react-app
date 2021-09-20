/**
 * Created by liliangshan on 2021/9/18
 */
import React, {Component} from 'react';
import {connect} from "react-redux";
import {Progress} from 'antd'
import {Actions} from '@/actions'
import {bindActionCreators} from "redux";

class ProgressBar extends Component {

  componentDidMount() {
    this.props.updateProgress(0);
    setTimeout(() => this.props.updateProgress(50));
    setTimeout(() => this.props.updateProgress(99.9), 600);
    setTimeout(() => this.props.updateProgress(100), 1200);
  }

  render() {
    const {progress} = this.props;
    return (
      <div className="page-progress-wrap">
        {
          progress < 100 ? <Progress
            gapPosition="top"
            className="page-progress-bar"
            strokeWidth={2}
            showInfo={false}
            percent={progress}
          /> : ""
        }
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  progress: state.progress
});

const mapDispatchToProps = dispatch => bindActionCreators({
  updateProgress: Actions.updateProgress,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProgressBar);
