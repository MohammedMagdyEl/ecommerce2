import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./beautiful_roomes.css";


import { Pagination } from "swiper/modules";

import Slide1 from "../../../image/Beautifl_rooms/Rectangle1.png";
import Slide2 from "../../../image/Beautifl_rooms/Rectangle2.png";
import Slide3 from "../../../image/Beautifl_rooms/Rectangle3.png";

function Beautiful_roomes() {
  return (
    <div className="Beautiful_roomes ">
      <div className="lift ">
        <h2>50+ Beautiful rooms inspiration</h2>
        <p>
          Our designer already made a lot of beautiful prototipe of rooms that
          inspire you
        </p>
        <button>Explore More</button>
      </div>
      <div className="navigation ">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper "
        >
          <SwiperSlide>
            <img src={Slide1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Slide2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Slide3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Slide2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Slide3} alt="" />
          </SwiperSlide>
          
        </Swiper>
      </div>
    </div>
  );
}

export default Beautiful_roomes;
