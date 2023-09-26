import { UserOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';


import { useNavigate } from "react-router-dom";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Avatar, Modal, Menu, Badge, Col, Row, Dropdown, message, } from 'antd';
import { useRef, useState } from 'react';
import {
  setToken,
} from '@/redux/reducers/tokenSlice';

const HOME_URL: string = "/";
const Header: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 退出登录
  const logout = () => {
    Modal.confirm({
      title: "温馨提示 🧡",
      icon: <ExclamationCircleOutlined />,
      content: "是否确认退出登录？",
      okText: "确认",
      cancelText: "取消",
      onOk: () => {
        dispatch(setToken(""));
        message.success("退出登录成功！");
        navigate("/login");
      }
    });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);



  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  // Dropdown Menu
  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: <span className="dropdown-item">首页</span>,
          onClick: () => navigate(HOME_URL)
        },
        {
          key: "2",
          label: <span className="dropdown-item">个人信息</span>,
          onClick: () => { setIsModalOpen(true); }
        },
        {
          key: "3",
          label: <span className="dropdown-item">修改密码</span>,
          onClick: () => { setIsModalOpen(true); }
        },
        {
          type: "divider" //分割线
        },
        {
          key: "4",
          label: <span className="dropdown-item">退出登录</span>,
          onClick: logout
        }
      ]}
    ></Menu>
  );


  return (
    <Row>
      <Col span={1}>首页</Col>
      <Col span={1} offset={22}>
        <Dropdown overlay={menu} placement="bottom" arrow trigger={["click"]}>
          <Badge count={1}>
            <Avatar style={{ backgroundColor: '#1677ff' }} icon={<UserOutlined />} />
          </Badge>
        </Dropdown>


        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>

      </Col>
    </Row>


  );
}

export default Header;