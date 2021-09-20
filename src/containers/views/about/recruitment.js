/**
 * Created by liliangshan on 2021/9/17
 */
import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {
  reduxActionIncrement,
  reduxActionAdd,
  reduxActionRemove,
  reduxActionAddRemoveI,
  reduxActionAddRemoveII,
  actionFn
} from "../../../actions/reduxAction"

class Recruitment extends Component {

  reduxActionIncrement = () => {
    this.props.reduxActionIncrement(1);
  }

  addClick = () => {
    this.props.add("add click")
  }

  removeClick = () => {
    this.props.remove("remove click")
  }

  addRemoveIClick = () => {
    this.props.addRemoveI("add_remove_i click")
  }

  addRemoveIIClick = () => {
    this.props.addRemoveII("add_remove_ii click")
  }

  render() {
    const {reduxAction, reduxActions} = this.props;
    return (<div>
      <div>having you</div>
      <div>
        <p>{reduxAction}</p>
        <button onClick={() => this.reduxActionIncrement()}>reduxActionIncrement</button>
        <p>{reduxActions.todo}</p>
        <button onClick={() => this.addClick()}>add</button>
        <button onClick={() => this.removeClick()}>remove</button>
        <button onClick={() => this.addRemoveIClick()}>addRemoveI</button>
        <button onClick={() => this.addRemoveIIClick()}>addRemoveII</button>
      </div>
    </div>);
  }

}

const mapStateToProps = (state) => ({
  reduxAction: state.actionReducer,
  reduxActions: state.actionReducers,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  reduxActionIncrement: actionFn(reduxActionIncrement),
  add: actionFn(reduxActionAdd),
  remove: actionFn(reduxActionRemove),
  addRemoveI: actionFn(reduxActionAddRemoveI),
  addRemoveII: actionFn(reduxActionAddRemoveII),
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Recruitment)
