import React from 'react';
import { Button, Checkbox, Form, Input, Typography, Card } from 'antd';

const { Title } = Typography;

const Register = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
    // Xử lý đăng ký ở đây
    alert("Chúc mừng bạn đã đăng ký thành công!");
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f5f5f5' }}>
      <Card style={{ width: 400, boxShadow: '0 2px 8px #f0f1f2' }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: 32 }}>Đăng ký</Title>
        <Form
          name="register"
          labelCol={{ span: 7 }}
          wrapperCol={{ span: 17 }}
          initialValues={{ agree: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Tên đăng nhập"
            name="username"
            rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Vui lòng nhập email!' }, { type: 'email', message: 'Email không hợp lệ!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="Xác nhận"
            name="confirm"
            dependencies={['password']}
            rules={[
              { required: true, message: 'Vui lòng xác nhận mật khẩu!' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Mật khẩu xác nhận không khớp!'));
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item name="agree" valuePropName="checked" wrapperCol={{ offset: 7, span: 17 }}>
            <Checkbox>Tôi đồng ý với điều khoản</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 7, span: 17 }}>
            <Button type="primary" htmlType="submit" block>
              Đăng ký
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Register;