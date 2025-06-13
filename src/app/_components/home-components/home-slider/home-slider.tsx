"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { imageUrl } from "@/utils/product";
import { HomeSliderProps } from "./home-slider.types";

import "swiper/css";
import "swiper/css/pagination";

export const HomeSlider = ({ banners }: HomeSliderProps) => {
  const sliderBanners = banners.filter(
    (banner) => banner.position === "HOME_SLIDER_BANNER",
  );
  const sideBanners = banners.filter(
    (banner) => banner.position === "HOME_SIDE_BANNER",
  );
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
