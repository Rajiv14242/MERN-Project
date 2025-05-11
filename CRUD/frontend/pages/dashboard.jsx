import React from "react";
import { Outlet } from "react-router-dom";
import DashNav from "../component/navigation/DashNav";
const Dashboard = () => {
  return (
    <>
      <DashNav />
      <Outlet />
    </>
  );
};

export default Dashboard;
