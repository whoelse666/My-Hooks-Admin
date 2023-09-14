import React from "react"
import { Layout } from "antd"
import { Outlet, Link} from "react-router-dom";

const { Header, Footer, Sider, Content } = Layout

import '@/styles/layout.scss'
function LayoutIndex() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Layout>
        <Sider>
      <Link to="/login">Sider</Link>
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
