import React from "react";
import Navlink from "../component/navigation/navlink";
import { Outlet } from "react-router-dom";
const Shared = () => {
  return (
    <>
      <Navlink />

      <Outlet />
    </>
  );
};

export default Shared;
