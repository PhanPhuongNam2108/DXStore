import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Link } from 'react-router-dom';
import HeaderLayout from '../../layouts/HeaderLayout';
import FooterLayout from '../../layouts/FooterLayout';

const { Header, Content, Footer } = Layout;
const items = Array.from({ length: 1 }).map((_, index) => ({
  key: String(index + 1),
  label: "Trang chủ"
}));
const HomePage = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <HeaderLayout />
      
      <Content style = {{ padding: '0 48px' }}>
        <Breadcrumb
          style = {{ margin: '16px 0' }}
          items = {{ title: 'Danh muc san pham' }}
        />
        <div
          style = {{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          Danh mục sản phẩm
        </div>
      </Content>

      <FooterLayout/>
    </Layout>
  );
};
export default HomePage;