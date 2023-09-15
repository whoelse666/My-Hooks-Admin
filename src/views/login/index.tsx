/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react"
import { Button, Checkbox, Form, Input } from "antd";
import { UserOutlined, LockOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { loginApi } from "@/api/login";
// import { useTranslation } from "react-i18next";
import './loginform.scss'
import Xue from "@/assets/images/xue3.jpg";
import loginLeft from "@/assets/images/login_left.png";
 
const LoginForm: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false);
  // const { t } = useTranslation();
   type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  // 登录
  const onFinish = async (loginParams: any) => {
    console.log('loginParams', loginParams)
    try {
      setLoading(true);
      const { data } = await loginApi(loginParams);
      console.log('data', data)
    } finally {
      setLoading(false);
    }
  };
  return <div className="login-container">
    <div className="login-box">
      <div className="login-left">
        <img src={loginLeft} alt="login" />
      </div>
      <div className="login-form">
        <div className="login-logo">
          <img className="login-icon" src={Xue} alt="logo" />
          <span className="logo-text">Hooks-Admin</span>
        </div>
        <Form
          form={form}
          labelCol={{ span: 5 }}
          initialValues={{ remember: true }}
          size="large"
          autoComplete="off"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item name="username" rules={[{ required: true, message: "请输入用户名" }]}>
            <Input placeholder="用户名：admin / user" prefix={<UserOutlined />} />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: "请输入密码" }]}>
            <Input.Password autoComplete="new-password" placeholder="密码：123456" prefix={<LockOutlined />} />
          </Form.Item>
          <Form.Item<FieldType>
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>记住</Checkbox>
          </Form.Item>

          <Form.Item className="login-btn">
            <Button
              onClick={() => {
                form.resetFields();
              }}
              icon={<CloseCircleOutlined />}
            >
              重置
            </Button>
            <Button onClick={() => {
              form.resetFields();
            }} type="primary" htmlType="submit" loading={loading} icon={<UserOutlined />}>
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  </div>



}


export default LoginForm;