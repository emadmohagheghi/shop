"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ArrowLeft2, ArrowRight2, More } from "iconsax-react";
import Image from "next/image";
import { imageUrl } from "@/utils/product";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
import MoreImages from "./more-images";

export default function ImageSlider({
  images,
}: {
  images: {
    id: number;
    image: {
      name: string;
    };
  }[];
}) {
  const swiperRef = useRef<SwiperType | null>(null);
  const paginationRef = useRef<HTMLDivElement | null>(null);
  console.log(images);
  return (
    <div className="space-y-4 border-gray-200 px-5 lg:border-l-[2px]">
      {/* swiper slider with navigation */}
      <div className="relative">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;

            setTimeout(() => {
              if (
                swiper.params.pagination &&
                typeof swiper.params.pagination !== "boolean"
              ) {
                swiper.params.pagination.el = paginationRef.current;
                swiper.pagination.init();
                swiper.pagination.render();
                swiper.pagination.update();
              }
            }, 0);
          }}
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          pagination={{
            el: paginationRef.current,
            clickable: true,
          }}
          className="carousel w-full max-w-[512px] select-none"
          slidesPerView={1}
          allowTouchMove={false}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="px-5">
              <Image
                className="mix-blend-multiply select-none"
                src={imageUrl(image.image.name)}
                alt={image.image.name}
                width={512}
                height={512}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute top-1/2 z-10 flex w-full -translate-y-1/2 justify-between *:rounded-lg *:bg-gray-200 *:p-2">
          <button className="prev-btn">
            <ArrowRight2 color="black" size={24} />
          </button>
          <button className="next-btn">
            <ArrowLeft2 color="black" size={24} />
          </button>
        </div>
      </div>
      {images.length >= 3 && (
        <div className="hidden gap-2 *:flex-1 *:overflow-hidden *:rounded-lg *:p-1 lg:flex">
          {images.map((image, index) => {
            if (index >= 3) return;
            return (
              <div className="border border-gray-300" key={image.id}>
                <Image
                  onClick={() => swiperRef.current?.slideTo(index)}
                  src={imageUrl(image.image.name)}
                  alt={image.image.name}
                  width={128}
                  height={128}
                  className="cursor-pointer select-none"
                />
              </div>
            );
          })}
          {images.length >= 3 && (
            <>
              <MoreImages images={images} />
            </>
          )}
        </div>
      )}
      <div
        ref={paginationRef}
        className="flex gap-3 p-2 lg:hidden mr-auto justify-end"
      />
    </div>
  );
}
