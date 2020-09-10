import React, { useState } from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  EditOutlined,
  BarChartOutlined
} from "@ant-design/icons";
const { SubMenu } = Menu;

export default () => {
  const [collapsed, setCollapsed] = useState(0);
  return (
    <Menu mode="horizontal" style={{ width: 160 }} theme="dark">
      <SubMenu icon={<EditOutlined />} title="项目任务"></SubMenu>
      <SubMenu icon={<AppstoreOutlined />} title="历史项目"></SubMenu>
      <SubMenu icon={<BarChartOutlined />} title="任务计划"></SubMenu>
    </Menu>
  );
};
