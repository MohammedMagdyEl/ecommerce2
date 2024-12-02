import React from "react";
import "./funiroFurniture.css";
import Rectangle1 from "../../../image/FuniroFurniture/Rectangle1.png";
import Rectangle2 from "../../../image/FuniroFurniture/Rectangle2.png";
import Rectangle3 from "../../../image/FuniroFurniture/Rectangle3.png";
import Rectangle4 from "../../../image/FuniroFurniture/Rectangle4.png";
import Rectangle5 from "../../../image/FuniroFurniture/Rectangle5.png";
import Rectangle6 from "../../../image/FuniroFurniture/Rectangle6.png";
import Rectangle7 from "../../../image/FuniroFurniture/Rectangle7.png";
import Rectangle8 from "../../../image/FuniroFurniture/Rectangle8.png";
import Rectangle9 from "../../../image/FuniroFurniture/Rectangle9.png";

function FuniroFurniture() {
  return (
    <>
      <h1>FuniroFurniture</h1>
      <div className="FuniroFurniture">
        <div className="item1">
          <img src={Rectangle1} alt="" />
        </div>
        <div className="item2 ">
          <img src={Rectangle2} alt="" />
        </div>
        <div className="item3 ">
          <img src={Rectangle3} alt="" />
        </div>
        <div className="item4 ">
          <img src={Rectangle4} alt="" />
        </div>
        <div className="item5 ">
          <img src={Rectangle5} alt="" />
        </div>
        <div className="item6">
          <img src={Rectangle6} alt="" />
        </div>
        <div className="item7">
          <img src={Rectangle7} alt="" />
        </div>
        <div className="item8">
          <img src={Rectangle8} alt="" />
        </div>
        <div className="item9">
          <img src={Rectangle9} alt="" />
        </div>
      </div>
    </>
  );
}

export default FuniroFurniture;
