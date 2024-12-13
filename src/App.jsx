import "./App.css";
import Header from "./assets/componant/header/Header";
import Footer from "./assets/componant/footer/Footer";
import Home from "./assets/componant/home/Home";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Shop from "./assets/componant/shop/Shop";
import Contact from "./assets/componant/contact/Contact";
import Cart from "./assets/componant/cart/Cart";
import { CartProvider } from "./assets/context/context";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        {/* <div className="container"> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        {/* </div> */}
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
