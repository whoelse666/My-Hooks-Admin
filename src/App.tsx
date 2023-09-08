import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
// 定义路由规则
import { Routes, Route, Link, NavLink, Navigate } from "react-router-dom"

// 路由匹配成功后要渲染的组件
import Home from "./views/Home"
import About from "./views/About"
// Route用来定义
function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
        <Link to="/">index</Link>
        <br />
        <Link to="/home">home</Link>
        <br />
        <Link to="/about">about</Link>
      </div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
