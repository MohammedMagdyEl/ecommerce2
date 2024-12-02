import React from "react";
import Baner from "./baner/Baner";
import Browse_range from "./browser_thr_range/browse/Browse_range";

import Beautiful_roomes from "./beautiful_roomes/Beautiful_roomes";
import FuniroFurniture from "./funiroFurniture/FuniroFurniture";
import Home_products from "./home_products/home_products";

function Home() {
  return (
    <div>
      <Baner />
      <Browse_range />
      <Home_products />
      <Beautiful_roomes />
      <FuniroFurniture />
    </div>
  );
}

export default Home;
