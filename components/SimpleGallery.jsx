"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";

import "swiper/css/bundle";

function SimpleGallery({ imageList }) {
  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        lazy={{
          loadPrevNext: true,
          loadPrevNextAmount: 2,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {imageList.map((image) => {
          return (
            <SwiperSlide key={image.src}>
              <Image src={image.src} width={650} height={250} alt={image.alt} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default SimpleGallery;
