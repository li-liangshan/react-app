/**
 * Created by liliangshan on 2021/9/17
 */
import {UploadOutlined, UserOutlined} from "@ant-design/icons";

const menu = [
  {
    title: '首页',
    path: '/home',
    icon: UploadOutlined,
  },
  {
    title: '关于我们',
    path: '/about',
    icon: UserOutlined,
    children: [
      {title: '公司介绍', path: '/about/introduction'},
      {title: '招贤纳士', path: '/about/recruitment'}
    ]
  }
];

export default menu;
