// import Layout from "@/layouts/index";
import Layout from "@/Layout";
// 懒加载 Layout
import React from "react";
import lazyLoad from "@/routers/utils/lazyLoad";
// const Layout = lazyLoad(React.lazy(() => import("@/Layout")));

/**
 * @description: default layout
 */
export const LayoutIndex = () => <Layout />;
