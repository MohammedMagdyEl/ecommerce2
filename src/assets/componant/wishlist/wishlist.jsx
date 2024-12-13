import React, { useContext, useState } from "react";
import "./wishlist.css";
import wishlist_baner from "../../image/Wishlist/1.png"
import { MdDelete } from "react-icons/md";
import { CartContext } from "../../context/context";
import Second_Footer from "../second-footer/Second_Footer";

function Wishlist() {
  const { wishlistItems,removeFromWishlist} = useContext(CartContext);

  const calculateSubtotal = (item) => item.price * (item.quantity || 1);
  return (
    <div>
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
                <div className="delete" onClick={() => removeFromWishlist(item.id)}>
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
