import React, { useRef } from "react"
import { useEffect, useState } from "react"
import { Routes, Route, Link, NavLink, Navigate, Outlet } from "react-router-dom"
import { Button, Layout, Space } from "antd"
const { Header, Footer, Sider, Content } = Layout

import LayoutMenu from "./components/Menu"
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons"

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#7dbcea",
}

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  // backgroundColor: "#108ee9",
}

const siderStyle: React.CSSProperties = {
  backgroundColor: "#ffffff",
  overflowX: "hidden",
  overflowY: "auto",
  textAlign: "center",
  // width: "200px !important",
  lineHeight: "120px",
  color: "#fff",
}

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#7dbcea",
}
const rootboxStyle: React.CSSProperties = {
  height: "100vh",
}

const LayoutIndex = (props: any) => {
  const { Sider, Content } = Layout
  const [collapsed, setCollapsed] = useState(false)
  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  return (
    <Layout style={rootboxStyle}>
      <Sider style={siderStyle} trigger={null} collapsible collapsed={collapsed}>
        <LayoutMenu></LayoutMenu>
      </Sider>
      <Layout>
        <Header style={headerStyle}>
          <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
        </Header>
        <Content style={contentStyle}>
          <Outlet></Outlet>
        </Content>
        {/* <Footer style={footerStyle}>Footer</Footer> */}
      </Layout>
    </Layout>
  )
}

// const mapStateToProps = (state: any) => state.menu

export default LayoutIndex
// export default connect(mapStateToProps, mapDispatchToProps)(LayoutIndex);
