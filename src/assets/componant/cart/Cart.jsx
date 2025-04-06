import React from "react";
import "./cart.css";
import { useDispatch, useSelector } from "react-redux";
import {
  updateCartQuantity,
  removeFromCart,
} from "../../redux/action/productAction"; // Correct the import
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import cartBanner from "../../image/cart/1.png";
import SecondFooter from "../second-footer/Second_Footer";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);

  const calculateSubtotal = (item) => item.price * (item.quantity || 1);

  const total = cartItems.reduce(
    (acc, item) => acc + calculateSubtotal(item),
    0
  );

  const handleQuantityChange = (e, item) => {
    const updatedQuantity = parseInt(e.target.value) || 1;
    dispatch(updateCartQuantity(item.id, updatedQuantity)); // Dispatch the action
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
    toast.error('Item removed from cart!', {
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
  };

  return (
    <div>
      <ToastContainer/>
      {/* Cart Banner */}
      <div className="banner">
        <img src={cartBanner} alt="CartBanner" />
      </div>

      {/* Cart Details */}
      <div className="cart_detels">
        <div className="lift">
          <div className="header_cart">
            <h4 className="header_Product">Product</h4>
            <h4 className="header-Price">Price</h4>
            <h4 className="header-Quantity">Quantity</h4>
            <h4 className="header-subtotal">Subtotal</h4>
            <h4 className="header-delete">Action</h4>
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
                    onChange={(e) => handleQuantityChange(e, item)} // Handle quantity change
                  />
                </div>
                <div className="subtotal">
                  Rs. <span>{calculateSubtotal(item).toLocaleString()}</span>
                </div>
                <div
                  className="delete"
                  onClick={() => handleRemoveItem(item.id)} // Trigger toast after removing item
                >
                  <MdDelete size={24} />
                </div>
              </div>
            ))
          ) : (
            <p className="empty-cart">Your cart is empty.</p>
          )}
        </div>

        {/* Cart Totals */}
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

      {/* Footer */}
      <SecondFooter />
    </div>
  );
}

export default Cart;
