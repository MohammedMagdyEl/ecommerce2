import React from "react";
import "./browser_range.css";
import Dining from "../../../../image/Dining.png";
import Living from "../../../../image/Living.png";
import Bedroom from "../../../../image/Bedroom.png";
function Browse_range() {
  return (
    <div className="browser_range">
      <div className="text_browser">
        <h2>Browser The Range</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis,
          nostrum!
        </p>
      </div>
      <div className="browser_card  ">
        <div className="card  ">
          <img src={Dining} alt="" />
          <h3 className="">Dining</h3>
        </div>
        <div className="card ">
          <img src={Living} alt="" />
          <h3>Living</h3>
        </div>
        <div className="card">
          <img src={Bedroom} alt="" />
          <h3>Bedroom</h3>
        </div>
      </div>
    </div>
  );
}

export default Browse_range;
