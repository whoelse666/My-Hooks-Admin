import { Navigate, useRoutes } from "react-router-dom";
import { RouteObject } from "@/routers/interface";
import NotFound from "@/views/NotFound/";
import Login from "@/views/login/index";
import TodoList from "@/views/demo/TodoList"
import React from "react";
import lazyLoad from "@/routers/utils/lazyLoad";

// import Layout from "@/Layout"
import { LayoutIndex } from "@/routers/constant";
const homeRouter: Array<RouteObject> = [
  {
    element: <LayoutIndex />,
    meta: {
      title: "HOME"
    },
    children: [
      {
        path: "/home/index",
        element: lazyLoad(React.lazy(() => import("@/views//assembly/selectIcon/index"))),
        meta: {
          title: "首页",
          key: "homeIndex"
        }
      },

    ]
  }

]


// * 导入所有router
const metaRouters = import.meta.globEager("./modules/*.tsx");

// * 处理路由
export const routerArray: RouteObject[] = [];
Object.keys(metaRouters).forEach(item => {
  Object.keys(metaRouters[item]).forEach((key: any) => {
    routerArray.push(...metaRouters[item][key]);
  });
});

routerArray.push(...homeRouter)
export const rootRouter = [
  {
    path: "/",
    element: <Navigate to="/login" />
  },

  // {
  //   path: "/",
  //   element: <Layout />,
  //   meta: {
  //     title: "首页"
  //   },
  // },
  // {
  //   path: "/home/index",
  //   element: <Layout />,
  // },
  // {
  //   path: "/reduxtest",
  //   element: <TodoList />,
  // },
  {
    path: "/login",
    element: <Login />,
    // element: <Navigate to="/login" />,
    // meta: {
    //   requiresAuth: false,
    //   title: "登录页",
    //   key: "login"
    // }
  },
  ...routerArray,

  {
    path: "*",
    element: <NotFound />,
    // element: <Navigate to="/404" />,
  },
]


const Router = () => {
  const routes = useRoutes(rootRouter)
  return routes
}

export default Router
