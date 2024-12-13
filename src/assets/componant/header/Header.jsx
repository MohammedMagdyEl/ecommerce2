import React, { useState } from "react";
import "./header.css";
import logo from "../../image/SkinClinic.png";
import { IoPersonAddOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router";

function Header() {
  const [showModel, setshowModel] = useState(false);

  return (
    <div className="header ">
      <div className="logo ">
        <img src={logo} alt="logo_image " />
      </div>

      <div className="nav ">
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
      <div className="icons ">
        <ul>
          <li>
            <Link to="/login">
              <IoPersonAddOutline />
            </Link>
          </li>
          <li>
            <Link to="/search">
              <CiSearch />
            </Link>
          </li>
          <li>
            <Link to="/favorite">
              <CiHeart />
            </Link>
          </li>
          <li className="lignth_cart">
            <Link to="/cart">
              <CiShoppingCart />
            </Link>
            
          </li>
        </ul>
      </div>

      <button
        className=" icon-menu "
        onClick={() => {
          setshowModel(true);
        }}
      >
        <CiMenuBurger />
      </button>
      {showModel && (
        <div className="fixed border">
          <div>
            <ul className=" nav ">
              <li>
                <button
                  className=" icon-close btn-close "
                  onClick={() => {
                    setshowModel(false);
                  }}
                >
                  <IoClose />
                </button>
              </li>
              <li
                onClick={() => {
                  setshowModel(false);
                }}
              >
                <Link to="/">Home</Link>
              </li>
              <li
                onClick={() => {
                  setshowModel(false);
                }}
              >
                <Link to="/shop">Shop</Link>
              </li>
              <li
                onClick={() => {
                  setshowModel(false);
                }}
              >
                <Link to="/about">About</Link>
              </li>
              <li
                onClick={() => {
                  setshowModel(false);
                }}
              >
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="icons-fixed ">
            <ul>
              <li onClick={() => {
                  setshowModel(false);
                }}>
                <Link to="/login">
                  <IoPersonAddOutline />
                </Link>
              </li>
              <li onClick={() => {
                  setshowModel(false);
                }}>
                <Link to="/search">
                  <CiSearch />
                </Link>
              </li>
              <li onClick={() => {
                  setshowModel(false);
                }}>
                <Link to="/favorite">
                  <CiHeart />
                </Link>
              </li>
              <li onClick={() => {
                  setshowModel(false);
                }}>
                <Link to="/cart">
                  <CiShoppingCart />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
