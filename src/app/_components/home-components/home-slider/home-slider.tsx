'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { imageUrl } from '@/utils/product';
import { HomeSliderProps } from './home-slider.types';

import 'swiper/css';
import 'swiper/css/pagination';

export const HomeSlider = ({ sliderBanners, sideBanners }: HomeSliderProps) => {
  console.log('sideBanners', imageUrl(sideBanners[0].image.name));
  console.log('sliderBanners', imageUrl(sliderBanners[0].image.name));
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
          {sliderBanners.map((banner) => (

            <SwiperSlide key={banner.id}>
              <Image
                width={1152}
                height={518}
                src={imageUrl(banner.image.name)}
                alt={banner.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full lg:w-1/4 flex flex-row lg:flex-col gap-3 *:*:rounded-lg justify-between">
        <div className="w-1/2 lg:w-full">

          <Image
            src={imageUrl(sideBanners[0].image.name)}
            alt=""
            width={384}
            height={266}
          />
        </div>
        <div className="w-1/2 lg:w-full">
          <Image
            src={imageUrl(sideBanners[1].image.name)}
            alt=""
            width={384}
            height={266}
          />
        </div>
      </div>
    </div>
  );
};
