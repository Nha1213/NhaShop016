import React from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { Link } from "react-router-dom";
import Footerpage from "./Footerpage";
const { Header, Content, Footer, Sider } = Layout;
import { Outlet } from "react-router-dom";
import "../style/Shop.css"
// Define the menu items with icons and Link labels
const items = [
  {
    key: "1",
    label: <Link to="">Show All Brand</Link>
  },
  {
    key: "2",
    // icon: React.createElement(UserOutlined),
    label: <Link to="Brompton"> Brand Brompton</Link>,
  },
  {
    key: "3",
    // icon: React.createElement(VideoCameraOutlined),
    label: <Link to="Ebikes"> Brand ebikes</Link>,
  },
  {
    key: "4",
    // icon: React.createElement(UploadOutlined),
    label: <Link to="Tern"> Brand Tern</Link>,
  },
  {
    key: "5",
    // icon: React.createElement(UploadOutlined),
    label: <Link to="Moulton"> Brand Moulton</Link>,
  },
  {
    key: "6",
    // icon: React.createElement(UploadOutlined),
    label: <Link to="Uniquebikes"> Brand Uniquebikes</Link>,
  },
  {
    key: "7",
    // icon: React.createElement(UploadOutlined),
    label: <Link to="Montague"> Brand Montague</Link>,
  },
];

const Shop = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={items}
          />
        </Sider>

        <Layout>

          <Content style={{ margin: "24px 16px 0" }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              <Outlet />
            </div>
          </Content>

          {/* <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer> */}

          <Footerpage />
        </Layout>
      </Layout>

    </>
  );
};

export default Shop;
