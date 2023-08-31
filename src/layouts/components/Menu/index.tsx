import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, Spin } from "antd";
import { findAllBreadcrumb, getOpenKeys, handleRouter, searchRoute } from "@/utils/util";
import { setBreadcrumbList } from "@/redux/modules/breadcrumb/action";
import { setAuthRouter } from "@/redux/modules/auth/action";
import { getMenuList } from "@/api/modules/login";
import { connect } from "react-redux";
import type { MenuProps } from "antd";
import * as Icons from "@ant-design/icons";
import Logo from "./components/Logo";
import "./index.less";

// 定义 menu 类型
	type MenuItem = Required<MenuProps>["items"][number];
	const getItem = (
		label: React.ReactNode,
		key?: React.Key | null,
		icon?: React.ReactNode,
		children?: MenuItem[],
		type?: "group"
	): MenuItem => {
		return {
			key,
			icon,
			children,
			label,
			type
		} as MenuItem;
	};

	// 动态渲染 Icon 图标
	const customIcons: { [key: string]: any } = Icons;
	const addIcon = (name: string) => {
		return React.createElement(customIcons[name]);
	};

	// 处理后台返回菜单 key 值为 antd 菜单需要的 key 值
	const deepLoopFloat = (menuList: Menu.MenuOptions[], newArr: MenuItem[] = []) => {
		menuList.forEach((item: Menu.MenuOptions) => {
			// 下面判断代码解释 *** !item?.children?.length   ==>   (!item.children || item.children.length === 0)
			if (!item?.children?.length) return newArr.push(getItem(item.title, item.path, addIcon(item.icon!)));
			newArr.push(getItem(item.title, item.path, addIcon(item.icon!), deepLoopFloat(item.children)));
		});
		return newArr;
	};


const LayoutMenu: React.FC = () => {
	// 获取菜单列表并处理成 antd menu 需要的格式
	const [menuList, setMenuList] = useState<MenuItem[]>([]);
	const [loading, setLoading] = useState(false);
	const getMenuData = async () => {
		setLoading(true);
		try {
			const { data } = await getMenuList();
			if (!data) return;
			setMenuList(deepLoopFloat(data));
			// // 存储处理过后的所有面包屑导航栏到 redux 中
			// setBreadcrumbList(findAllBreadcrumb(data));
			// // 把路由菜单处理成一维数组，存储到 redux 中，做菜单权限判断
			// const dynamicRouter = handleRouter(data);
			// setAuthRouter(dynamicRouter);
			// setMenuListAction(data);
		} finally {
			setLoading(false);
		}
	};

  
	useEffect(() => {
		getMenuData();
	}, []);
  setTimeout(() => {
    setLoading(false)
  }, 1000)
  return (
    <div style={{ width: "100%" }} className="menu">
      <Spin spinning={loading} tip="Loading...">
        <Menu defaultSelectedKeys={["1"]} defaultOpenKeys={["sub1"]} theme="light" mode="inline" triggerSubMenuAction="click" items={menuList}></Menu>
      </Spin>
    </div>
  )
}

export default LayoutMenu
