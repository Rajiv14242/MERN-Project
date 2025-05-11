import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import SharedNav from "../navigation/SharedNav/SharedNav";
import Home from "../pages/Home/Home";
import Topwear from "../pages/Topwear/Topwear";
import Bottomwear from "../pages/bottomwear/Bottomwear";
import Shoes from "../pages/shoes/Shoes";
import Hats from "../pages/hats/Hats";
import Accessories from "../pages/accessories/Accessories";
import Cart from "../pages/cart/Cart";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedNav />}>
          <Route index element={<Home />}></Route>
          <Route path="/topwear" element={<Topwear />}></Route>
          <Route path="/bottomwear" element={<Bottomwear />}></Route>
          <Route path="/shoes" element={<Shoes />}></Route>
          <Route path="/hats" element={<Hats />}></Route>
          <Route path="/accessories" element={<Accessories />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
