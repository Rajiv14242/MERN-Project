import React from "react";

import {
  FaSearch,
  FaShoppingCart,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import "./style.css";
import CategoryNav from "../categoryNav/CategoryNav";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
const SharedNav = () => {
  const [priceState, setpriceState] = useState(false);
  const [discountState, setdiscountState] = useState(false);
  const [ratingState, setratingState] = useState(false);
  const [state, setState] = useState(false);
  const location = useLocation();
  const showTop = ["/cart"];

  const specificRoute = showTop.includes(location.pathname);
  console.log(specificRoute);
  return (
    <div className="container">
      <div className="top">
        <div className="half">
          <NavLink className="logo" to="/">
            FASHION
          </NavLink>
          <div className="logo_lower">
            Explore <span className="logo_lower_right"> Plus</span>
          </div>
        </div>
        <div className="searchengine">
          <input
            type="text"
            name="search"
            placeholder="Search for products"
            className="search_field"
          ></input>
          <FaSearch className="search_icon" />
        </div>
        <div className="login_btn" onClick={() => setState(!state)}>
          Login
        </div>
        {state && (
          <div className="overLay">
            <div className="form_section">
              FORM
              <FaTimes
                onClick={() => setState(!state)}
                className="overlay_close_icon"
              />
            </div>
          </div>
        )}

        <NavLink to="/cart" className="cart_portion">
          <FaShoppingCart className="cart_logo" />
          <div className="target_name">Cart</div>
        </NavLink>
      </div>
      {!specificRoute && (
        <>
          <div className="buttom">
            <CategoryNav />
          </div>
          <div className="outlet_part">
            <div className="side_menu">
              <div className="filter">Filter</div>
              <ul className="side_filter">
                <li>
                  Price
                  {priceState ? (
                    <FaChevronUp
                      className="arrow"
                      onClick={() => setpriceState(!priceState)}
                      title="Closing it will unselect the filter"
                    />
                  ) : (
                    <FaChevronDown
                      className="arrow"
                      onClick={() => setpriceState(!priceState)}
                    />
                  )}
                  {priceState && (
                    <div className="check_price">
                      <input
                        type="radio"
                        id="normal"
                        name="price"
                        value="normal"
                      />
                      <label htmlFor="normal">Normal</label>
                      <br />
                      <input
                        type="radio"
                        id="lowtohigh"
                        name="price"
                        value="lowtohigh"
                      />
                      <label htmlFor="lowtohigh">Low to High</label>
                      <br />

                      <input
                        type="radio"
                        id="hightolow"
                        name="price"
                        value="hightolow"
                      />
                      <label htmlFor="hightolow">High to Low</label>
                      <br />
                    </div>
                  )}
                </li>
                <li>
                  Discount
                  {discountState ? (
                    <FaChevronUp
                      className="arrow"
                      onClick={() => setdiscountState(!discountState)}
                      title="Closing it will unselect the filter"
                    />
                  ) : (
                    <FaChevronDown
                      className="arrow"
                      onClick={() => setdiscountState(!discountState)}
                    />
                  )}
                  {discountState && (
                    <div className="check_price">
                      <input type="radio" id="30" name="discount" value="30" />
                      <label htmlFor="30">30% or more</label>
                      <br />
                      <input type="radio" id="40" name="discount" value="40" />
                      <label htmlFor="40">40% or more</label>
                      <br />
                      <input type="radio" id="50" name="discount" value="50" />
                      <label htmlFor="50">50% or more</label>
                      <br />
                      <input type="radio" id="60" name="discount" value="60" />
                      <label htmlFor="60">60% or more</label>
                      <br />

                      <input type="radio" id="70" name="discount" value="70" />
                      <label htmlFor="70">70% or more</label>
                      <br />
                      <input type="radio" id="80" name="discount" value="80" />
                      <label htmlFor="80">80% or more</label>
                      <br />
                    </div>
                  )}
                </li>
                <li>
                  Rating
                  {ratingState ? (
                    <FaChevronUp
                      className="arrow"
                      onClick={() => setratingState(!ratingState)}
                      title="Closing it will unselect the filter"
                    />
                  ) : (
                    <FaChevronDown
                      className="arrow"
                      onClick={() => setratingState(!ratingState)}
                    />
                  )}
                  {ratingState && (
                    <div className="check_price">
                      <input type="radio" id="above2" name="rating" value="2" />
                      <label htmlFor="above2">2 or more</label>
                      <br />
                      <input type="radio" id="above3" name="rating" value="3" />
                      <label htmlFor="above3">3 or more</label>
                      <br />
                      <input type="radio" id="above4" name="rating" value="4" />
                      <label htmlFor="above4">4 or more</label>
                      <br />
                      <input type="radio" id="5" name="rating" value="5" />
                      <label htmlFor="5">5 Star</label>
                      <br />
                    </div>
                  )}
                </li>
              </ul>
            </div>
            <Outlet />
          </div>
        </>
      )}
      {specificRoute && <Outlet />}
    </div>
  );
};

export default SharedNav;
