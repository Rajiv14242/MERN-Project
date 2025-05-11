import React from "react";
import { NavLink } from "react-router-dom";
const Navlink = () => {
  return (
    <>
      <NavLink to="/">Create User</NavLink>
      <NavLink to="/login">Login</NavLink>
      {/* <NavLink to="/dashboard">Dashboard</NavLink> */}
    </>
  );
};

export default Navlink;
