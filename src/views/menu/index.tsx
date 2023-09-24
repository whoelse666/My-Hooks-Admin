
import React, { useEffect, useState } from "react";
import { useLocation, } from "react-router-dom";
import { getMenuList } from "@/api/login";
 
import type { MenuProps, } from 'antd';
import {/*  Button, */ Menu, Spin } from 'antd';
import { useNavigate } from 'react-router-dom';
import * as Icons from "@ant-design/icons";
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}
/**
 * @description 获取需要展开的 subMenu
 * @param {String} path 当前访问地址
 * @returns array
 */
export const getOpenKeys = (path: string) => {
  let newStr: string = "";
  const newArr: any[] = [];
  const arr = path.split("/").map(i => "/" + i);
  for (let i = 1; i < arr.length - 1; i++) {
    newStr += arr[i];
    newArr.push(newStr);
  }
  return newArr;
};



const MenuTree: React.FC = () => {
  const { pathname } = useLocation();

  const isCollapse = null; 
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  // 获取菜单列表并处理成 antd menu 需要的格式
  const [menuList, setMenuList] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([pathname]);

  // 刷新页面菜单保持高亮
  useEffect(() => {
    setSelectedKeys([pathname]);
    isCollapse ? null : setOpenKeys(getOpenKeys(pathname));
  }, [pathname, isCollapse]);

  const getMenuData = async () => {
    setLoading(true);
    try {
      const { data } = await getMenuList();
      if (!data) return;
      setMenuList(deepLoopFloat(data));
 
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getMenuData();
  }, []);

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

  // const toggleCollapsed = () => {
  //   setCollapsed(!collapsed);
  // };

  const searchRoute = (path: string, routes = []) => {
    let result = {};
    for (const item of routes) {
      if (item.path === path) return item;
      if (item.children) {
        const res = searchRoute(path, item.children);
        if (Object.keys(res).length) result = res;
      }
    }
    return result;
  };


  // 点击当前菜单跳转页面
  const navigate = useNavigate();
  const clickMenu: MenuProps["onClick"] = ({ key }: { key: string }) => {
    const route = searchRoute(key, reduxMenuList);
    if (route.isLink) window.open(route.isLink, "_blank");
    navigate(key);
  };

  // 设置当前展开的 subMenu
  const onOpenChange = (openKeys: string[]) => {
    if (openKeys.length === 0 || openKeys.length === 1) return setOpenKeys(openKeys);
    const latestOpenKey = openKeys[openKeys.length - 1];
    if (latestOpenKey.includes(openKeys[0])) return setOpenKeys(openKeys);
    setOpenKeys([latestOpenKey]);
  };

  return (

    <Spin spinning={loading} tip="Loading...">
      {/* <Logo isCollapse={isCollapse}></Logo> */}
      {/* <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button> */}
      <Menu
        theme="dark"
        mode="inline"
        triggerSubMenuAction="click"
        openKeys={openKeys}
        selectedKeys={selectedKeys}
        items={menuList}
        onClick={clickMenu}
        onOpenChange={onOpenChange}
      ></Menu>
    </Spin>



    // <Menu
    //   defaultSelectedKeys={['1']}
    //   defaultOpenKeys={['sub1']} onClick={clickMenu}
    //   onOpenChange={onOpenChange} triggerSubMenuAction="click"
    //   mode="inline"
    //   theme="dark" openKeys={openKeys}
    //   inlineCollapsed={collapsed}
    //   items={items}
    // />

  );
};

export default MenuTree;
