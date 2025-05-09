'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import { ProductCard } from '../product-card';
import { ArrowLeft2 } from 'iconsax-react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import Link from 'next/link';
import { CarouselProps } from './carousel.types';
import Image from 'next/image';

export const Carousel = ({
  items,
  link,
  title,
  className,
}: CarouselProps) => {
  return (
    <div className={className}>
      <div className="flex justify-between mb-3">
        {title && <h3 className="text-2xl font-medium">{title}</h3>}
        {link && (
          <Link className="flex items-center" href={link}>
            <p className="text-nowrap">مشاهده همه</p>
            <ArrowLeft2 className="" size={24} />
          </Link>
        )}
      </div>
      <Swiper
        className="mySwiper carousel"
        slidesPerView={'auto'}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            {typeof item === 'string' ? (
              <Image alt="" src={item} width={256} height={256} />
            ) : (
              <ProductCard
                title={item.title}
                originalPrice={item.originalPrice}
                discountPercentage={item.discountPercentage}
                discountedPrice={item.discountedPrice}
                image={item.image}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
