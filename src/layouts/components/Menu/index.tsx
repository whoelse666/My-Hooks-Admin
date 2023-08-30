import React, { useState } from "react"
import { AppstoreOutlined, ContainerOutlined, DesktopOutlined, MailOutlined, MenuFoldOutlined, MenuUnfoldOutlined, PieChartOutlined } from "@ant-design/icons"
import type { MenuProps } from "antd"
import { Button, Menu, Spin } from "antd"

type MenuItem = Required<MenuProps>["items"][number]

function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[], type?: "group"): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem
}

const items: MenuItem[] = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("Option 3", "3", <ContainerOutlined />),

  getItem("Navigation One", "sub1", <MailOutlined />, [getItem("Option 5", "5"), getItem("Option 6", "6"), getItem("Option 7", "7"), getItem("Option 8", "8")]),

  getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),

    getItem("Submenu", "sub3", null, [getItem("Option 11", "11"), getItem("Option 12", "12")]),
  ]),
]

const LayoutMenu: React.FC = () => {
  const [loading, setLoading] = useState(true)
  setTimeout(() => {
    setLoading(false)
  }, 1000)
  return (
    <div style={{ width: "100%" }} className="menu">
      <Spin spinning={loading} tip="Loading...">
        <Menu defaultSelectedKeys={["1"]} defaultOpenKeys={["sub1"]} theme="light" mode="inline" triggerSubMenuAction="click" items={items}></Menu>
      </Spin>
    </div>
  )
}

export default LayoutMenu
