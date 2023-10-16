import { useEffect } from "react";
import { Table, DatePicker, Button, Space } from "antd";


import "./index.less";

const UseHooks = () => {
  // 按钮权限

  const { RangePicker } = DatePicker;

  useEffect(() => {
  }, []);

  const dataSource = [
    {
      key: "1",
      name: "胡彦斌",
      age: 32,
      address: "西湖区湖底公园1号"
    },
    {
      key: "2",
      name: "胡彦祖",
      age: 42,
      address: "西湖区湖底公园1号"
    },
    {
      key: "3",
      name: "刘彦祖",
      age: 18,
      address: "西湖区湖底公园1号"
    },
    {
      key: "4",
      name: "刘彦祖",
      age: 18,
      address: "翻斗大街翻斗花园二号楼1001室"
    },
    {
      key: "5",
      name: "刘彦祖",
      age: 18,
      address: "翻斗大街翻斗花园二号楼1001室"
    }
  ];

  const columns: any[] = [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
      align: "center"
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age",
      align: "center"
    },
    {
      title: "住址",
      dataIndex: "address",
      key: "address",
      align: "center",
      width: "50%"
    }
  ];
  return (
    <>
      <div className="date">
        <span>切换国际化的时候看我 😎 ：</span>
        <RangePicker />
      </div>
      <div className="auth">
        <Space>
          <Button type="primary">Admin && User </Button>
          <Button type="primary"> Admin </Button>
          <Button type="primary"> User </Button>
        </Space>
      </div>
      <Table dataSource={dataSource} columns={columns} />
    </>
  );
};

export default UseHooks;
