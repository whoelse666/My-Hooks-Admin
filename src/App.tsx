import "./App.css"
import { HashRouter } from "react-router-dom"
import Router from "@/routers/index"
// 路由匹配成功后要渲染的组件
import LayoutIndex from "./LayoutIndex"
// Route用来定义
function App() {
  return (
    <HashRouter>
      <LayoutIndex />
      {/* <Router /> */}
    </HashRouter>
  )
}

export default App
