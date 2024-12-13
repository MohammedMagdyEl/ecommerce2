import React from "react";
import "./baner.css";
import background from "../../../image/background 1.png";
import { Link } from "react-router";

function Baner() {
  return (
    <div className="baner">
      <div className="background">
        <img src={background} alt="" />
      </div>
      <div className="baner_text">
        <h5>New Arrival</h5>
        <div>
          <h3>Discover Our </h3>
          <h3>New Collection </h3>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
          consequatur aut sequi voluptas quos, eveniet quas reiciendis quidem?
          Incidunt, libero!
        </p>
        <Link to="/Shop">
          <button className="btn">Buy Now</button>
        </Link>
      </div>
    </div>
  );
}

export default Baner;
