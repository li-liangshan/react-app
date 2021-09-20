/**
 * Created by liliangshan on 2021/9/18
 */
import React, {Component} from "react";

const WrapIntercept = (Element) => {

  return class In extends Component {
    constructor(props) {
      super(props);
      const interceptComponent = new Element();
      this.state = {
        isRender: !(!!interceptComponent.beforeRouterEnter)
      }

      const next = () => {
        this.state.isRender = true;
      }

      !this.state.isRender && interceptComponent.beforeRouterEnter(next);
    }

    render() {
      return this.state.isRender ? <Element {...this.props} /> : "";
    }
  }

}

export default WrapIntercept;
