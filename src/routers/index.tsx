import { /* Navigate, */ useRoutes } from "react-router-dom"
import NotFound from "@/views/NotFound/";
import Login from "@/views/login/index";
import LayoutIndex from "@/LayoutIndex"

export const rootRouter = [
  {
    path: "/home/index",
    element: <LayoutIndex />,
  },
  {
    path: "/",
    element: <LayoutIndex />,
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
