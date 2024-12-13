import React, { useContext, useState } from "react";
import "./cart.css";
import cart_baner from "../../image/cart/1.png";
import { MdDelete } from "react-icons/md";
import { CartContext } from "../../context/context";
import Second_Footer from "../second-footer/Second_Footer";
import { Link } from "react-router";

function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  const calculateSubtotal = (item) => item.price * (item.quantity || 1);

  const total = cartItems.reduce(
    (acc, item) => acc + calculateSubtotal(item),
    0
  );

  const handleQuantityChange = (e, item) => {
    const updatedQuantity = parseInt(e.target.value) || 1;
    updateQuantity(item.id, updatedQuantity);
  };

  return (
    <div>
      <div className="baner">
        <img src={cart_baner} alt="Cart Banner" />
      </div>

      <div className="cart_detels ">
        <div className="lift">
          <div className="header_cart">
            <h4 className="header_Product">Product</h4>
            <h4 className="header-Price">Price</h4>
            <h4 className="header-Quantity">Quantity</h4>
            <h4 className="header-subtotal">Subtotal</h4>
            <h4 className="header-delete borde">Action</h4>
          </div>

          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className="product">
                <div className="produc_image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="produc_name">
                  <p>{item.name}</p>
                </div>
                <div className="product_price">
                  Rs. <span>{item.price.toLocaleString()}</span>
                </div>
                <div className="quantity">
                  <input
                    type="number"
                    value={item.quantity || 1}
                    min="1"
                    onChange={(e) => handleQuantityChange(e, item)}
                  />
                </div>
                <div className="subtotal">
                  Rs. <span>{calculateSubtotal(item).toLocaleString()}</span>
                </div>
                <div className="delete" onClick={() => removeFromCart(item.id)}>
                  <MdDelete size={24} />
                </div>
              </div>
            ))
          ) : (
            <p className="empty-cart">Your cart is empty.</p>
          )}
        </div>

        <div className="right">
          <div className="title">
            <h3>Cart Totals</h3>
          </div>
          <div className="price">
            <p>
              Subtotal: <span>Rs. {total.toLocaleString()}</span>
            </p>
            <h6>
              Total: <span>Rs. {total.toLocaleString()}</span>
            </h6>
          </div>
          <Link to="/check_out">
            <button>Check Out</button>
          </Link>
        </div>
      </div>
      <Second_Footer />
    </div>
  );
}

export default Cart;
