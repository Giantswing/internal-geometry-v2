"use client";
// import Swiper core and required modules
import { Pagination, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

import Image from "next/image";

function SimpleGallery({ imageList }) {
  return (
    <>
      <Swiper
        speed={400}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
      >
        {imageList.map((image) => {
          return (
            <SwiperSlide key={image.src}>
              <Image src={image.src} width={450} height={450} alt={image.alt} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default SimpleGallery;
