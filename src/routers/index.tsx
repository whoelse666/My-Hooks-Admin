import { Navigate, useRoutes, BrowserRouter  } from "react-router-dom";
// 定义当前项目的路由模式
 
import { LayoutIndex } from "@/routers/constant";
import { RouteObject } from "@/routers/interface";
 

import Juejin from '@/views/link/juejin/index'
import Github from '@/views/link/github/index'
import Login from '@/views/login/index'

// // * 导入所有router
// const metaRouters = import.meta.globEager("./modules/*.tsx");
// // * 处理路由
// export const routerArray: RouteObject[] = [];
// Object.keys(metaRouters).forEach(item => {
//   Object.keys(metaRouters[item]).forEach((key: any) => {
//     routerArray.push(...metaRouters[item][key]);
//   });
// });

export const rootRouter = [
  {
    path: "/",
    element: <LayoutIndex />,
    children: [
      {
        path: "/home/index",
        // element: lazyLoad(React.lazy(() => import("@/views/home/index"))),
        element: <Juejin />,
        meta: {
          requiresAuth: true,
          title: "首页",
          key: "home"
        }
      }
    ]
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
      key: "login"
    }
  },
  // ...routerArray,
  {
    path: "*",
    element: <Navigate to="/404" />
  }
];

 

const Router = () => {
  const routes = useRoutes(rootRouter);
  return routes;
};

export default Router;
