import React from "react";
import Header from "../components/Header";
import HeaderEnd from "../components/HeaderEnd";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <HeaderEnd />
    </div>
  );
};

export default MainLayout;
