"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { ArrowLeft2 } from "iconsax-react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import Link from "next/link";
import { CarouselProps } from "./carousel.types";
import React from "react";

export const Carousel = ({
  children,
  link,
  title,
  className,
}: CarouselProps) => {
  return (
    <div className={className}>
      {title && link && (
        <div className="mb-5 flex justify-between">
          {title && <h3 className="text-2xl font-medium">{title}</h3>}
          {link && (
            <Link className="flex items-center" href={link}>
              <p className="text-nowrap">مشاهده همه</p>
              <ArrowLeft2 className="" size={24} />
            </Link>
          )}
        </div>
      )}
      <Swiper
        className="mySwiper carousel"
        slidesPerView={"auto"}
        spaceBetween={10}
        freeMode={true}
        modules={[FreeMode]}
      >
        {React.Children.map(children, (child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
