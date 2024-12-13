import React from 'react'
import "./second_footer.css"
import high from "../../image/second_footer/1.png"
import warranty from "../../image/second_footer/2.png"
import free from "../../image/second_footer/3.png"
import support from "../../image/second_footer/4.png"

function Second_Footer() {
  return (
    <div className='second-footer'>
        <div className="item ">
            <div className="icon ">
                <img src={high} alt="" />
            </div>
            <div className="text">
                <h3>High Quality</h3>
                <p>crafted from top materials</p>
            </div>
        </div>
        <div className="item">
        <div className="icon">
                <img src={warranty} alt="" />
            </div>
            <div className="text">
                <h3>Warranty Protection</h3>
                <p>Over 2 years</p>
            </div>
        </div>
        <div className="item">
        <div className="icon">
                <img src={free} alt="" />
            </div>
            <div className="text">
                <h3>Free Shipping</h3>
                <p>Order over 150 $</p>
            </div>
        </div>
        <div className="item ">
        <div className="icon">
                <img src={support} alt="" />
            </div>
            <div className="text ">
                <h3>24 / 7 Support</h3>
                <p>Dedicated support</p>
            </div>
        </div>

    </div>
  )
}

export default Second_Footer