import React, { Fragment } from 'react';
import { Layout, Icon } from 'antd';
import GlobalFooter from '@/components/GlobalFooter';

const year = new Date().getFullYear();
const { Footer } = Layout;
const FooterView = () => (
  <Footer style={{ padding: 0, background: '#004B80' }}>
    <GlobalFooter
      /*links={[
        {
          key: 'Pro 首页',
          title: 'Pro 首页',
          href: 'https://pro.ant.design',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <Icon type="github" />,
          href: 'https://github.com/ant-design/ant-design-pro',
          blankTarget: true,
        },
        {
          key: 'Ant Design',
          title: 'Ant Design',
          href: 'https://ant.design',
          blankTarget: true,
        },
      ]}*/
      copyright={
        <div style={{color: 'rgba(255,255,255,.9)'}}>
          Copyright <Icon type="copyright" /> {year} 小白考研
        </div>
      }
    />
  </Footer>
);
export default FooterView;
