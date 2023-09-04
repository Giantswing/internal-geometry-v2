"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  Thumbs,
  Controller,
} from "swiper/modules";
import { useState, useEffect, useRef } from "react";

import "swiper/css/bundle";

function FullGallery({ imageList }) {
  const gallerySwiperRef = useRef(null);
  const thumbsSwiperRef = useRef(null);

  const mainParams = {
    modules: [Navigation, Pagination, Scrollbar, Autoplay, Controller, Thumbs],

    spaceBetween: 40,
    rewind: true,
    speed: 400,
    //loop: true,
    //loopedSlides: 4, //looped slides should be the same
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  };

  const thumbsParams = {
    modules: [Navigation, Pagination, Scrollbar, Autoplay, Controller, Thumbs],

    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 2,
    touchRatio: 0.2,
    slideToClickedSlide: true,
    //loop: true,
    //freeMode: true,
    //loopedSlides: 4, //looped slides should be the same
    //watchSlidesVisibility: true,
    //watchSlidesProgress: true,

    /*


    */

    breakpoints: {
      1024: {
        slidesPerView: "auto",
        spaceBetween: 10,
      },
    },

    /*
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 6,
        spaceBetween: 6,
      },
      1024: {
        slidesPerView: 10,
        spaceBetween: 10,
      },
      1920: {
        slidesPerView: 15,
        spaceBetween: 10,
      },
    },
    */
  };

  function reset_animation() {
    console.log("reset_animation");
  }

  useEffect(() => {
    const gallerySwiper = gallerySwiperRef.current.swiper;
    const thumbsSwiper = thumbsSwiperRef.current.swiper;
    if (gallerySwiper.controller && thumbsSwiper.controller) {
      gallerySwiper.controller.control = thumbsSwiper;
      thumbsSwiper.controller.control = gallerySwiper;
      console.log("Swiper controllers set");
    }
  }, []);

  return (
    <>
      <div class="o-container">
        <Swiper
          {...mainParams}
          ref={gallerySwiperRef}
          className="js-gallery-swiper c-gallery-swiper c-gallery-swiper--main"
        >
          <Image
            src="/ig-horizontal-logo.png"
            className="c-gallery-swiper__logo"
            width={250}
            height={250}
            alt="Internal Geometry Logo"
          />

          {imageList.map((image) => {
            return (
              <SwiperSlide key={image.src}>
                <Image
                  src={image.src}
                  width={1920}
                  height={250}
                  alt={image.alt}
                  priority
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div class="o-container--fluid c-gallery-swiper__thumbs_bg">
        <Swiper
          {...thumbsParams}
          ref={thumbsSwiperRef}
          className="js-gallery-swiper-thumbs c-gallery-swiper c-gallery-swiper--thumbs"
        >
          {imageList.map((image) => {
            return (
              <SwiperSlide key={image.src}>
                <div className="img-container">
                  <Image
                    src={image.src}
                    width={650}
                    height={250}
                    alt={image.alt}
                    priority
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}

export default FullGallery;
