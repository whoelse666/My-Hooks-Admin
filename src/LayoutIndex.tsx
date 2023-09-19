import React from "react"
import { Layout } from "antd"
import { Outlet  } from "react-router-dom";

const { Header, Footer, Sider, Content } = Layout

import '@/styles/layout.scss';
import MenuTree from '@/views/menu'
function LayoutIndex() {
  return (
    <>
      <Layout>
        <Sider>
          <MenuTree />
        </Sider>
        <Layout>
          <Header>Header</Header>
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
