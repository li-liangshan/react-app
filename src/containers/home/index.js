/**
 * Created by liliangshan on 2021/9/14
 */
import React from 'react'
import {push} from 'connected-react-router'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Actions} from "../../actions";

const Home = props => (
  <div>
    <h1>Home</h1>
    <p>Count: {props.count}</p>

    <p>
      <button onClick={props.increment}>Increment</button>
      <button onClick={props.incrementAsync} disabled={props.isIncrementing}>Increment Async</button>
    </p>

    <p>
      <button onClick={props.decrement}>Decrementing</button>
      <button onClick={props.decrementAsync} disabled={props.isDecrementing}>Decrement Async</button>
    </p>

    <p>
      <button onClick={() => props.changePage()}>Go to about page via redux</button>
    </p>

  </div>
)

const mapStateToProps = ({counter}) => ({
  count: counter.count,
  isIncrementing: counter.isIncrementing,
  isDecrementing: counter.isDecrementing
})

const mapDispatchToProps = dispatch => bindActionCreators({
  increment: Actions.increment,
  incrementAsync: Actions.incrementAsync,
  decrement: Actions.decrement,
  decrementAsync: Actions.decrementAsync,
  changePage: () => push('/about-us')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
