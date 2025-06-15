"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { imageUrl } from "@/utils/product";
import { HomeSliderProps } from "./home-slider.types";

import "swiper/css";
import "swiper/css/pagination";

export const HomeSlider = ({ banners, isLoading }: HomeSliderProps) => {
  const sliderBanners = banners.filter(
    (banner) => banner.position === "HOME_SLIDER_BANNER",
  );
  const sideBanners = banners.filter(
    (banner) => banner.position === "HOME_SIDE_BANNER",
  );

  if (isLoading) {
    return (
      <div className="container flex flex-col gap-5 lg:flex-row">
        {/* Main slider skeleton */}
        <div className="w-full lg:w-3/4">
          <div className="shimmer h-[250px] w-full rounded-lg bg-gray-200 sm:h-[400px] lg:h-[518px]"></div>
        </div>

        {/* Side banners skeleton */}
        <div className="flex w-full flex-row justify-between gap-3 lg:w-1/4 lg:flex-col">
          <div className="shimmer border border-gray-200 h-[150px] w-1/2 rounded-lg bg-gray-200 sm:h-[200px] lg:h-[250px] lg:w-full"></div>
          <div className="shimmer border border-gray-200 h-[150px] w-1/2 rounded-lg bg-gray-200 sm:h-[200px] lg:h-[250px] lg:w-full"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container flex flex-col gap-5 lg:flex-row">
      <div className="w-full lg:w-3/4">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500 }}
          loop
          className="w-full rounded-lg"
        >
          {sliderBanners.map((banner) => (
            <SwiperSlide key={banner.id}>
              <Link href={banner.url}>
                <Image
                  width={1152}
                  height={518}
                  src={imageUrl(banner.image.name)}
                  alt={banner.title}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex w-full flex-row justify-between gap-3 *:*:rounded-lg lg:w-1/4 lg:flex-col">
        <Link className="w-1/2 lg:w-full" href={sideBanners[0].url}>
          <Image
            src={imageUrl(sideBanners[0].image.name)}
            alt={sideBanners[0].title}
            width={384}
            height={266}
          />
        </Link>
        <Link className="w-1/2 lg:w-full" href={sideBanners[1].url}>
          <Image
            src={imageUrl(sideBanners[1].image.name)}
            alt={sideBanners[1].title}
            width={384}
            height={266}
          />
        </Link>
      </div>
    </div>
  );
};
