import React from "react";
import "./baner_shop.css";
import baner_shop_image from "../../../image/shop/shop.png";
import { IoFilterSharp } from "react-icons/io5";
function Baner_shop() {
  return (
    <div className="Baner_shop ">
      <div className="baner-image ">
        <img src={baner_shop_image} alt="" />
      </div>
      <div className="baner_button border">
      <div className="filter">
        <h5><IoFilterSharp/> filter </h5>

        </div>
      </div>

    </div>
  );
}

export default Baner_shop;
