/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react"
import { Button, Input, Form } from "antd";
import { UserOutlined, LockOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { loginApi } from "@/api/login";
import { useTranslation } from "react-i18next";

const LoginForm: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false);
  const { t } = useTranslation();


  // 登录
  const onFinish = async (loginParams: any) => {
    try {
      setLoading(true);
      const { data } = await loginApi(loginParams);
      console.log('data', data)
    } finally {
      setLoading(false);
    }
  };
  return (<Form
    form={form}
    name="basic"
    labelCol={{ span: 5 }}
    initialValues={{ remember: true }}
    size="large"
    autoComplete="off"
    onFinish={onFinish}
  >
    <Form.Item name="username" rules={[{ required: true, message: "请输入用户名" }]}>
      <Input placeholder="用户名：admin / user" prefix={<UserOutlined />} />
    </Form.Item>
    <Form.Item name="password" rules={[{ required: true, message: "请输入密码" }]}>
      <Input.Password autoComplete="new-password" placeholder="密码：123456" prefix={<LockOutlined />} />
    </Form.Item>
    <Form.Item className="login-btn">
      <Button
        onClick={() => {
          form.resetFields();
        }}
        icon={<CloseCircleOutlined />}
      >
        {t("login.reset")}
      </Button>
      <Button type="primary" htmlType="submit" loading={loading} icon={<UserOutlined />}>
        {t("login.confirm")}
      </Button>
    </Form.Item>
  </Form>)

}


export default LoginForm;