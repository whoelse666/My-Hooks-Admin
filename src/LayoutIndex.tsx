import React from "react"
import { ConfigProvider, Layout } from "antd"
import { Outlet  } from "react-router-dom";

const { Header, Footer, Sider, Content } = Layout

import '@/styles/layout.scss';
import HeaderCom from '@/views/header'
import MenuTree from '@/views/menu'
function LayoutIndex() {
  return (
  <>
      <Layout>
        <Sider style={{'borderRight':'1px solid pink'}}>
          <MenuTree />
        </Sider>
        <Layout>
          <Header><HeaderCom /></Header>
          <Content>Content
            <Outlet></Outlet>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
</>
  )
}

export default LayoutIndex
