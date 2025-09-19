import React from 'react';
import { Button, Checkbox, Form, Input, Typography, Card } from 'antd';
import { Link } from 'react-router-dom';

const { Title } = Typography;

const Login = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
    // Xử lý đăng nhập ở đây
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url(/backlog.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Card style={{ width: 400, boxShadow: '0 2px 8px #f0f2f5', borderRadius: 16 }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: 32 }}>Đăng nhập</Title>
        <Form
          name="login"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            label="Tên đăng nhập"
            name="username"
            rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}
            style={{ marginBottom: 16 }}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
            style={{ marginBottom: 16 }}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" style={{ marginBottom: 8 }}>
            <Checkbox>Ghi nhớ đăng nhập</Checkbox>
          </Form.Item>

          <div style={{ textAlign: 'left', marginBottom: 16 }}>
            <strong>Nếu chưa có tài khoản, hãy <Link to="/register">Đăng kí tại đây</Link></strong>
          </div>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;