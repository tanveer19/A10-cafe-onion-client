import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Gallery.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Gallery() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="my-8">
      <h4 className="text-5xl text-center my-3"> Gallery</h4>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/img/gallery/gallery-1.jpg" className="rounded-box" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/gallery/gallery-2.jpg" className="rounded-box" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/gallery/gallery-3.jpg" className="rounded-box" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/gallery/gallery-4.jpg" className="rounded-box" />
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}
