import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;
const items = [
  { key: '1', label: 'Trang chủ' }
];

const HeaderLayout = () => (
  <Header
    style={{
      position: 'sticky',
      top: 0,
      zIndex: 1,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
    }}
  >
    <div className="demo-logo" />
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['1']}
      items={items}
      style={{ flex: 1, minWidth: 0 }}
    />
    <div>
      <Link to="/login">
        <button style={{ marginRight: 16 }}>Login</button>
      </Link>
      <Link to="/register">
        <button style={{ marginRight: 16 }}>Register</button>
      </Link>
    </div>
  </Header>
);

export default HeaderLayout;