import React, { useContext, useState } from "react";
import background from "../../image/checkout/1.png";
import { CartContext } from "../../context/context";
import "./checkput.css";
import Second_Footer from "./../second-footer/Second_Footer";
import { Link } from "react-router";

function Checkout() {
  const { cartItems } = useContext(CartContext);

  const calculateSubtotal = (item) => item.price * (item.quantity || 1);

  const total = cartItems.reduce(
    (acc, item) => acc + calculateSubtotal(item),
    0
  );

  const [selectedMethod, setSelectedMethod] = useState("bank-transfer");

  const handlePaymentChange = (event) => {
    setSelectedMethod(event.target.value);
  };

  return (
    <>
      <div className="baner">
        <div className="background">
          <img src={background} alt="" />
        </div>
      </div>

      <div className="billing_det">
        <div className="lift ">
          <form action="">
            <div className="name">
              <div>
                <label htmlFor="first_name">First Name</label>
                <input type="text" id="first_name" />
              </div>
              <div>
                <label htmlFor="last_name">Last Name</label>
                <input type="text" id="last_name" />
              </div>
            </div>
            <label htmlFor="company">Company Name (Optional)</label>
            <input type="text" id="company" />
            <label htmlFor="country">Country / Region</label>
            <input type="text" id="country" />
            <label htmlFor="street">Street address</label>
            <input type="text" id="street" />
            <label htmlFor="city">Town / City</label>
            <input type="text" id="city" />
            <label htmlFor="provunce">Province</label>
            <input type="text" id="provunce" />
            <label htmlFor="zip_code">ZIP code</label>
            <input type="text" id="zip_code" />
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" />
            <label htmlFor="email">Email address</label>
            <input type="text" id="email" />
            <label htmlFor="additional_information">
              Additional information
            </label>
            <input type="text" id="additional_information" />
          </form>
        </div>

        <div className="right ">
          <div className="top ">
            <h2>Product</h2>
            <h2>Subtotal</h2>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div className="none" key={item.id}>
                  <p>
                    <span>{item.name}</span>
                  </p>
                  <p>
                    {" "}
                    Rs. <span> {item.price}</span>
                  </p>
                </div>
              ))
            ) : (
              <p className="empty-cart">Your cart is empty.</p>
            )}

            <p>Subtotal</p>
            <p>
              {" "}
              Rs. <span> {total.toLocaleString()}</span>
            </p>
            <h2>Total</h2>
            <h4 className="total">Rs. {total.toLocaleString()}</h4>

           
          </div>
          <div className=" buttom">
              <hr />
              <form>
                <div
                //   style={{ marginBottom: "20px" }}
                >
                  <input
                    type="radio"
                    id="bank-transfer"
                    name="payment-method"
                    value="bank-transfer"
                    checked={selectedMethod === "bank-transfer"}
                    onChange={handlePaymentChange}
                  />
                  <label
                    htmlFor="bank-transfer"
                  >
                    Direct Bank Transfer
                  </label>
                  <p
               
                  >
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order will not
                    be shipped until the funds have cleared in our account.
                  </p>
                </div>

                <div
               
                >
                  <input
                    type="radio"
                    id="cash-on-delivery"
                    name="payment-method"
                    value="cash-on-delivery"
                    checked={selectedMethod === "cash-on-delivery"}
                    onChange={handlePaymentChange}
                  />

                  <label
                    htmlFor="cash-on-delivery"
                  >
                    Direct Bank Transfer
                  </label>
                </div>
                <div
                >
                  <input
                    type="radio"
                    id="direct-bank-transfer"
                    name="payment-method"
                    value="cash-on-delivery"
                    checked={selectedMethod === "cash-on-delivery"}
                    onChange={handlePaymentChange}
                  />

                  <label
                    htmlFor="direct-bank-transfer"
                  >
                    Cash On Delivery
                  </label>
                </div>
                <p
                >
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our{" "}
                  <Link
                    to="#" >
                    privacy policy
                  </Link>
                  .
                </p>

                <button
                >
                  Place order
                </button>
              </form>
            </div>
        </div>
      </div>
      <Second_Footer />
    </>
  );
}

export default Checkout;
