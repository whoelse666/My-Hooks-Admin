import { /* Navigate, */ useRoutes } from "react-router-dom";
import { RouteObject } from "@/routers/interface";
import NotFound from "@/views/NotFound/";
import Login from "@/views/login/index";
import LayoutIndex from "@/LayoutIndex"
import TodoList from "@/views/demo/TodoList"


// * 导入所有router
const metaRouters = import.meta.globEager("./modules/*.tsx");

// * 处理路由
export const routerArray: RouteObject[] = [];
Object.keys(metaRouters).forEach(item => {
  Object.keys(metaRouters[item]).forEach((key: any) => {
    routerArray.push(...metaRouters[item][key]);
  });
});

console.log('routerArray', routerArray)
export const rootRouter = [

  {
    path: "/",
    element: <LayoutIndex />,
  },

  {
    path: "/home/index",
    element: <LayoutIndex />,
  },
  {
    path: "/reduxtest",
    element: <TodoList />,
  },
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
