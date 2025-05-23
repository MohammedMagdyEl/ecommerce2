import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import baner from "../../image/contact/1.png";
import address from "../../image/contact/addres.png";
import phone from "../../image/contact/phone.png";
import working from "../../image/contact/working.png";
import Second_Footer from "./../second-footer/Second_Footer";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_wi7gbf8",
      "template_c4cb70o",
      form.current,
      "Tt8gPKCCSOAZ1ll3x"
    );
    e.target.reser();
  };
  return (
    <>
      <div className="contact">
        <div className="image">
          <img src={baner} alt="" />
        </div>
        <div className="touch ">
          <div className="lift">
            <div className="address ">
              <div className="icon">
                <img src={address} alt="" />
              </div>
              <div className="text">
                <h3>Address</h3>
                <p>236 5th SE Avenue, New York NY10000, United States</p>
              </div>
            </div>
            <div className="address ">
              <div className="icon">
                <img src={phone} alt="" />
              </div>
              <div className="text">
                <h3>phone</h3>
                <p>01144634529</p>
                <p>01018455387</p>
                <p>m07747724@gmail.com</p>
              </div>
            </div>
            <div className="address">
              <div className="icon">
                <img src={working} alt="" />
              </div>
              <div className="text">
                <h3>Working Time</h3>
                <p>Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>

          <form ref={form} onSubmit={sendEmail} className="">
            <div>
              <label htmlFor="username">Your Name</label>
              <input type="text" id="username" name="name" />
            </div>
            <div>
              <label htmlFor="email">Email addrss</label>
              <input type="text" id="email" name="email" />
            </div>
            <div>
              <label htmlFor="massage">Massage</label>
              <textarea name="massage" rows={10} type="text" id="massage" />
            </div>

            <button className="button">Submit</button>
          </form>
        </div>
      </div>
      <Second_Footer />
    </>
  );
}

export default Contact;
