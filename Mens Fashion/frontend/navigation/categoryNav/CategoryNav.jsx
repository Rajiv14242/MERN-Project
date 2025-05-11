import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
const CategoryNav = () => {
  return (
    <div className="hel">
      <ul className="category">
        <li>
          <NavLink
            to="/topwear"
            style={({ isActive }) => ({
              textDecoration: "none",
              color: isActive ? "#2874f0" : "black",
              fontWeight: isActive ? "bolder" : "normal",
            })}
          >
            Top Wear
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/bottomwear"
            style={({ isActive }) => ({
              textDecoration: "none",
              color: isActive ? "#2874f0" : "black",
              fontWeight: isActive ? "bolder" : "normal",
            })}
          >
            Bottom Wear
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shoes"
            style={({ isActive }) => ({
              textDecoration: "none",
              color: isActive ? "#2874f0" : "black",
              fontWeight: isActive ? "bolder" : "normal",
            })}
          >
            Shoes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/hats"
            style={({ isActive }) => ({
              textDecoration: "none",
              color: isActive ? "#2874f0" : "black",
              fontWeight: isActive ? "bolder" : "normal",
            })}
          >
            {" "}
            Hats
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/accessories"
            style={({ isActive }) => ({
              textDecoration: "none",
              color: isActive ? "#2874f0" : "black",
              fontWeight: isActive ? "bolder" : "normal",
            })}
          >
            Accessories
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default CategoryNav;
