import React, { useState, useEffect } from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";

const icon = () => (
  <img src="data:image/png;base64,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" />
);

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon()} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Cryptoverse</Link>
        </Typography.Title>
        <Button
          className="menu-control-container"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <MenuOutlined />
        </Button>
      </div>
      {activeMenu && (
        <Menu theme="dark">
          <Menu.Item icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />}>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined />}>
            <Link to="/exchanges">Exchanges</Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />}>
            <Link to="/news">News</Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
};

export default Navbar;
