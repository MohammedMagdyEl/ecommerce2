import React from "react";
import logo from "../../image/SkinClinic.png";
import "./footer.css";
import { Link } from "react-router";

function Footer() {
  return (
    <div className="footer">
      <div>
        <div className="logo ">
          <img src={logo} alt="footer_logo" />
          
            <span>Mohammed Magdy </span>
          
        </div>
      </div>
      <div className="links ">
        <span>Links</span>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="help">
        <span>Help</span>

        <ul>
          <li>
            <Link to="/payment_options">Payment Options</Link>
          </li>

          <li>
            <Link to="/retums">Retums</Link>
          </li>
          <li>
            <Link to="/privacy_policies">Privacy Policies</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
