import React, { useState } from "react"
import { Layout } from "antd"
const { Header, Footer, Sider, Content } = Layout
function Layout() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Layout>
        <Header>Header</Header>
        <Layout>
          <Sider>Sider</Sider>
          <Content>Content</Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </>
  )
}

export default Layout
