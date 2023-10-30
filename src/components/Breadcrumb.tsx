import React from 'react'
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { HashRouter, Link, Route, Routes, useLocation } from 'react-router-dom';
import { Alert, Breadcrumb } from 'antd';


import '@/styles/breadcrumb.less';

const BreadcrumbDom: React.FC = () => {
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter((i) => i);
  console.log('location.pathname', location, pathSnippets)
  const breadcrumbNameMap: Record<string, string> = {
    'home/index': 'homeIndex',
     
 
    'proTable': 'proTable',
    'proTable/useHooks': 'useHooks',
    'proTable/useComponent': 'useComponent',
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
        <span className='link-txt'>Home</span>
      </Link>
      ),
      key: '/',
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
