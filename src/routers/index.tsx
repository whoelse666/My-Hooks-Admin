import { Navigate, useRoutes } from "react-router-dom"

export const rootRouter = [
  {
    path: "/",
    element: <Navigate to="/layout" />,
  },
  {
    path: "/login",
    element: <Navigate to="/login" />,
  },
  {
    path: "*",
    element: <Navigate to="/404" />,
  },
]

const Router = () => {
  const routes = useRoutes(rootRouter)
  return routes
}

export default Router
