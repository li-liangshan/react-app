/**
 * Created by liliangshan on 2021/9/17
 */
import React, {Component, Fragment, useState} from "react";

const CountView = () => {
  let [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}

export default class Introduction extends Component {

  render() {
    return (
      <Fragment>
        <div>公司介绍</div>
        <CountView />
        <div>
          <h1>About Us</h1>
          <img src="https://i.i8tq.com/e_index/o.png" alt="" className="left"/>
          <p>上海天气预报，及时准确发布中央气象台天气信息，便捷查询上海今日天气，上海周末天气，上海一周天气预报，上海蓝天预报，上海天气预报，上海40日天气预报，还提供上海的生活指数、健康指数、交通指数、旅游指数，及时发布上海气象预警信号、各类气象资讯。</p>
        </div>
        <div className="weamapbody">
          <a href="https://e.weather.com.cn/radarMap/index.html"
             className="weamapbodybox">
          </a>
          <iframe key={"dd"} title="hello" src="https://e.weather.com.cn/e_index/rader.html?4564"
                  frameBorder="0" width="100%" height="100%">
          </iframe>
        </div>
      </Fragment>
    );
  }

}
