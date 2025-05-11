'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export const HomeSlider = () => {
  return (
    <div className="container flex flex-col lg:flex-row gap-5 px-3">
      <div className="w-full lg:w-3/4 ">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500 }}
          loop
          className="rounded-lg w-full"
        >
          <SwiperSlide className="">
            <img
              width={1152}
              height={518}
              src="/images/home-slider/slide-1.png"
              alt="لوازم جانبی رپو"
            />
          </SwiperSlide>
          <SwiperSlide className="">
            <img
              width={1152}
              height={518}
              src="/images/home-slider/slide-1.png"
              alt="لوازم جانبی رپو"
            />
          </SwiperSlide>
          <SwiperSlide className="">
            <img
              width={1152}
              height={518}
              src="/images/home-slider/slide-1.png"
              alt="لوازم جانبی رپو"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="w-full lg:w-1/4 flex flex-row lg:flex-col gap-3 *:*:rounded-lg justify-between">
        <div className="w-1/2 lg:w-full">
          <img
            src="/images/home-slider/pic-1.png"
            alt=""
            width={384}
            height={266}
          />
        </div>
        <div className="w-1/2 lg:w-full">
          <img
            src="/images/home-slider/pic-2.png"
            alt=""
            width={384}
            height={660}
          />
        </div>
      </div>
    </div>
  );
};
