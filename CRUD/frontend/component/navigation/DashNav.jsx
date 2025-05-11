import React from "react";
import { NavLink } from "react-router-dom";
const DashNav = () => {
  console.log("gg");
  return (
    <>
      <NavLink to={"/dashboard"}>Dashboard</NavLink>
      <NavLink to={"update"}>Update</NavLink>
      <NavLink to={"logout"}>Logout</NavLink>
      <NavLink to={"delete"}>Delete</NavLink>
    </>
  );
};

export default DashNav;
