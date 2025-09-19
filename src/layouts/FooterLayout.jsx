import React from 'react';
import { Layout, Menu } from 'antd';
import { Footer } from 'antd/es/layout/layout';

const FooterLayout = () => (
    <Footer style = {{ textAlign: 'center' }}>
        DXStore ©{new Date().getFullYear()} Created by Nam Phan Phuong
      </Footer>
)
export default FooterLayout;
