import React from "react"
import { ConfigProvider, Layout } from "antd"
import { Outlet } from "react-router-dom";

const { Header, Footer, Content } = Layout

import '@/styles/layout.less';
import HeaderCom from '@/views/header'
import BreadcrumbCom from '@/components/Breadcrumb'
import MenuTree from '@/views/menu'
function LayoutIndex() {
  return (
    <>
      <Layout>
        <MenuTree />
        <Layout>
          <Header style={{height:'120px'}}>
            <HeaderCom />
            <BreadcrumbCom />
            {/* <BreadcrumbCom items={breadcrumbItems} /> */}
          </Header>
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
