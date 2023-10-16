import React from "react"
import { ConfigProvider, Layout } from "antd"
import { Outlet  } from "react-router-dom";

const { Header, Footer, Sider, Content } = Layout

import '@/styles/layout.less';
import HeaderCom from '@/views/header'
import MenuTree from '@/views/menu'
function LayoutIndex() {
  return (
  <>
      <Layout>
        <Sider>
          <MenuTree />
        </Sider>
        <Layout>
          <Header><HeaderCom /></Header>
          <Content>
            <Outlet></Outlet>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
</>
  )
}

export default LayoutIndex
