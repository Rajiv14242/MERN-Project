import React from "react";
import "./style.css";
import tshirt from "../Images/tshirt.jpg";
const Home = () => {
  console.log("hello");
  return (
    <div className="main_view">
      <div className="heading">Mens Fashion Wears</div>
      <div className="user_interface">
        <div className="item">
          <img src={tshirt} alt="Product picture"></img>
          <div className="product_info">
            <div className="brand_name">ZARA</div>
            <div className="product_name">Product nameasdf</div>
            <div className="maths">
              <div>Rs 1200</div>
              <div className="mrp_amount">Rs 2000</div>
              <div className="disc">10% off</div>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={tshirt} alt="Product picture"></img>
          <div className="product_info">
            <div className="brand_name">ZARA</div>
            <div className="product_name">Product nameasdf</div>
            <div className="maths">
              <div>Rs 1200</div>
              <div className="mrp_amount">Rs 2000</div>
              <div className="disc">10% off</div>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={tshirt} alt="Product picture"></img>
          <div className="product_info">
            <div className="brand_name">ZARA</div>
            <div className="product_name">Product nameasdf</div>
            <div className="maths">
              <div>Rs 1200</div>
              <div className="mrp_amount">Rs 2000</div>
              <div className="disc">10% off</div>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={tshirt} alt="Product picture"></img>
          <div className="product_info">
            <div className="brand_name">ZARA</div>
            <div className="product_name">Product nameasdf</div>
            <div className="maths">
              <div>Rs 1200</div>
              <div className="mrp_amount">Rs 2000</div>
              <div className="disc">10% off</div>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={tshirt} alt="Product picture"></img>
          <div className="product_info">
            <div className="brand_name">ZARA</div>
            <div className="product_name">Product nameasdf</div>
            <div className="maths">
              <div>Rs 1200</div>
              <div className="mrp_amount">Rs 2000</div>
              <div className="disc">10% off</div>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={tshirt} alt="Product picture"></img>
          <div className="product_info">
            <div className="brand_name">ZARA</div>
            <div className="product_name">Product nameasdf</div>
            <div className="maths">
              <div>Rs 1200</div>
              <div className="mrp_amount">Rs 2000</div>
              <div className="disc">10% off</div>
            </div>
          </div>
        </div>

        {/* <div></div>
          <div></div>
          <div></div>
          <div></div> */}
      </div>
    </div>
  );
};

export default Home;
