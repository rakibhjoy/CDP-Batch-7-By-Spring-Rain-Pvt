import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./layout.scss";
const Layout = () => {
  return (
    <>
      <nav className="nav-bar">
        <ul className="nav-list">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/experience">experience</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
