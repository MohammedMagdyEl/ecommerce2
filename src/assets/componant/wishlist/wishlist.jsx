import React, { useContext, useState } from "react";
import "./wishlist.css";
import wishlist_baner from "../../image/Wishlist/1.png"
import { MdDelete } from "react-icons/md";
import { CartContext } from "../../context/context";
import Second_Footer from "../second-footer/Second_Footer";
import { useDispatch, useSelector } from "react-redux";
import {removeFromWishlistItems} from "../../redux/action/productAction"
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function Wishlist() {

  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlistItems);
  const calculateSubtotal = (item) => item.price * (item.quantity || 1);

  return (
    <div>
       <ToastContainer/>
      <div className="baner">
        <img src={wishlist_baner} alt="Cart Banner" />
      </div>

      <div className="wishlist_detels ">
        
          <div className="header_wishlist">
            <h4 className="header_Product">Product</h4>
            <h4 className="header-Price">Price</h4>
            <h4 className="header-subtotal">Subtotal</h4>
            <h4 className="header-delete borde">Action</h4>
          </div>

          {wishlistItems.length > 0 ? (
            wishlistItems.map((item) => (
              <div key={item.id} className="wishlist_product ">
                <div className="produc_image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="produc_name">
                  <p>{item.name}</p>
                </div>
                <div className="product_price">
                  Rs. <span>{item.price.toLocaleString()}</span>
                </div>
            
                <div className="subtotal">
                  Rs. <span>{calculateSubtotal(item).toLocaleString()}</span>
                </div>
                <div className="delete" onClick={() => {dispatch(removeFromWishlistItems(item.id))
                    toast.error('Item removed from Favorite!', {
                      position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: "bounce",
                      });
                }
              }>
                  <MdDelete size={24} />
                </div>
              </div>
            ))
          ) : (
            <p className="empty-cart">Your cart is empty.</p>
          )}
        


      </div>
      <Second_Footer/>
    </div>
  );
}

export default Wishlist;
