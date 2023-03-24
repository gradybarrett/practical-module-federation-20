import React from "react";
const deps = require("../package.json").dependencies;
import { WcWrapper } from "../../wcWrapper";

import { Layout, Menu, Row, Col } from "antd";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";

const { Header, Content } = Layout;

// https://github.com/facebook/react/issues/25675 - having trouble with unmounting

import("home/Home");
import("profile/Profile");
import("search/Search");
import("all/All");

const MENU_KEYS = {
  "/": "1",
  "/search": "2",
  "/profile": "3",
  "/all": "4",
};

const Shell = () => {
  const location = useLocation();
  return (
    <Layout className="layout">
      <Header>
        <Row>
          <Col>
            <div className="logo" />
          </Col>
          <Col>
            <Menu
              theme="dark"
              mode="horizontal"
              selectedKeys={MENU_KEYS[location.pathname]}
            >
              <Menu.Item key="1">
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/search">Search</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/profile">Profile</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/all">All</Link>
              </Menu.Item>
            </Menu>
          </Col>
          <Col flex="auto">
            <div className="grid grid-flow-row grid-cols-1 grid-rows-2">
              <div className="row-span-1 col-span-1 text-white text-right leading-normal">
                Shell Built React Version: {deps.react}
              </div>
              <div className="row-span-1 col-span-1 text-white text-right leading-normal">
                Shell Running React Version: {React.version}
              </div>
            </div>
          </Col>
        </Row>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">
          <Routes>
            <Route
              path="/"
              element={
                <React.Suspense fallback={<div>Loading home</div>}>
                  <WcWrapper wcTag="web-home"></WcWrapper>
                </React.Suspense>
              }
            />
            <Route
              path="/search"
              element={
                <React.Suspense fallback={<div>Loading search</div>}>
                  <WcWrapper wcTag="web-search"></WcWrapper>
                </React.Suspense>
              }
            />
            <Route
              path="/profile"
              element={
                <React.Suspense fallback={<div>Loading profile</div>}>
                  <WcWrapper wcTag="web-profile"></WcWrapper>
                </React.Suspense>
              }
            />
            <Route
              path="/all"
              element={
                <React.Suspense fallback={<div>Loading all</div>}>
                  <WcWrapper wcTag="web-all"></WcWrapper>
                </React.Suspense>
              }
            />
          </Routes>
        </div>
      </Content>
    </Layout>
  );
};

export default () => (
  <Router>
    <Shell />
  </Router>
);
