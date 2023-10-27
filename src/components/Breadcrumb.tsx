import React from 'react'
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { HashRouter, Link, Route, Routes, useLocation } from 'react-router-dom';
import { Alert, Breadcrumb } from 'antd';


import '@/styles/breadcrumb.less';

const BreadcrumbDom: React.FC = () => {
  const location = useLocation();
  // const pathSnippets = location.pathname.split('/').filter((i) => i);
  const pathSnippets = [ '/home/index', 'detail']
  console.log('location.pathname', location)
  const breadcrumbNameMap: Record<string, string> = {
    '/home/index': 'Application List',
    '/home/index/detail': 'detail',
    '/apps': 'Application List',
    '/apps/1': 'Application1',
    '/apps/2': 'Application2',
    '/apps/1/detail': 'Detail',
    '/apps/2/detail': 'Detail',
  };

  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `${pathSnippets.slice(0, index + 1).join('/')}`;
    console.log('url', url, breadcrumbNameMap[url])
    return {
      key: url,
      title: <Link className='my-breadcrumb-link' to={url}>{breadcrumbNameMap[url]}</Link>,
    };
  });

  const breadcrumbItems = [
    {
      title: (<Link to="/">
        <HomeOutlined />
        <span className='link-txt'>Application List</span>
      </Link>
      ),
      key: '/home',
    },
  ].concat(extraBreadcrumbItems);
  return (
    <Breadcrumb
      separator='/'
      className='my-breadcrumb'
      items={breadcrumbItems}
    />
  )
};

export default BreadcrumbDom;
