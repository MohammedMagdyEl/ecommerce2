import "./App.css";
import Header from "./assets/componant/header/Header";
import Footer from "./assets/componant/footer/Footer";
import Home from "./assets/componant/home/Home";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Shop from "./assets/componant/shop/Shop";

function App() {
  return (
    <BrowserRouter>
        <Header />
      {/* <div className="container"> */}
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        </Routes>
      {/* </div> */}
        <Footer />
    </BrowserRouter>
  );
}

export default App;
