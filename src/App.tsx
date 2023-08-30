
import React from 'react'
// 定义路由规则
import { Routes, Route, Link, NavLink, Navigate, Outlet } from 'react-router-dom'
import './App.css'
import { Layout, Space, Button } from 'antd';
import Router from "@/routers/index";
const { Header, Footer, Sider, Content } = Layout;
// import Juejin from '@/views/link/juejin/index'
// import Github from '@/views/link/github/index'

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#108ee9',
};

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#3ba0e9',
};

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};
const rootboxStyle: React.CSSProperties = {
  height: "100vh",
}

function App() { 
  return (
    <Layout className="root-box" style={rootboxStyle}>
      <Sider style={siderStyle}> Sider
      </Sider>
      <Layout>
        <Header style={headerStyle}>Header</Header>
        <Content style={contentStyle}>
          <Router />
          {/* <Outlet></Outlet> */}
        </Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Layout >
  )
}

export default App
