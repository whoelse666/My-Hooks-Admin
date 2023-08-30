import { Navigate, useRoutes, BrowserRouter  } from "react-router-dom";
// 定义当前项目的路由模式
 import React from 'react'
import { LayoutIndex } from "@/routers/constant";
import { RouteObject } from "@/routers/interface";
 

import Juejin from '@/views/link/juejin/index'
import Github from '@/views/link/github/index'
import Home from "@/views/home/index"
import Login from '@/views/login/index'
 
export const rootRouter = [
  {
    path: "/",
    element: <LayoutIndex />,
    children: [
      {
        path: "",
        // element: lazyLoad(React.lazy(() => import("@/views/home/index"))),
        element: <Home />,
        meta: {
          requiresAuth: false,
          title: "首页",
          key: "home",
        },
      },
      {
        path: "/home/index",
        // element: lazyLoad(React.lazy(() => import("@/views/home/index"))),
        element: <Juejin />,
      },
    ],
  },
  {
    path: "/juejin",
    element: <Juejin />,
  },
  {
    path: "/github",
    element: <Github />,
  },
  // {
  //   path: "/",
  //   element: <Navigate to="/login" />
  // },
  {
    path: "/login",
    element: <Login />,
    meta: {
      requiresAuth: false,
      title: "登录页",
      key: "login",
    },
  },
  // ...routerArray,
  {
    path: "*",
    element: <Navigate to="/404" />,
  },
]

 

const Router = () => {
  const routes = useRoutes(rootRouter);
  return routes;
};

export default Router;
