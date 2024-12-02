import React from 'react'
import Baner_shop from "./baner_shop/Baner_shop"
import Shop_products from './shop_products/Shop_products'
import Second_Footer from './second-footer/Second_Footer'

function Shop() {
  return (
    <div>
        <Baner_shop/>
        <Shop_products/>
        <Second_Footer/>
    </div>
  )
}

export default Shop