'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import { ProductCard } from '../product-card';
import { ArrowLeft2 } from 'iconsax-react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import Link from 'next/link';
import { Timer } from '../timer';

export const HomeOffers = () => {
  return (
    <div className="container my-5 px-3">
      <div className="bg-primary rounded-lg !p-4">
        <div className="w-full text-white lg:hidden flex justify-between mb-3">
          <p>تخفیف های شگفت انگیز</p>
          <Link className="flex items-center" href="">
            <p className='text-sm'>مشاهده همه</p>
            <ArrowLeft2 color="white" size={22} />
          </Link>
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
          <SwiperSlide className="my-auto !h-[384px] text-white !hidden lg:!block">
            <Link
              href="/products/offers"
              className="w-[300px] h-full flex flex-col justify-center items-center gap-5 p-5"
            >
              <h3 className="text-center font-medium text-[40px] leading-[140%] mt-auto">
                تخفیف های شگفت انگیز
              </h3>
              <Timer initialSeconds={150} />
              <p className="flex items-center self-start mt-auto">
                مشاهده همه
                <ArrowLeft2 color="white" size={24} />
              </p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              title="ایفون 16 پرو مکس 256/8 مشکی ساخت هند"
              originalPrice={100000}
              discountPercentage={10}
              discountedPrice={90000}
              image="/images/simple-product.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              title="ایفون 16 پرو مکس 256/8 مشکی ساخت هند"
              originalPrice={100000}
              discountPercentage={10}
              discountedPrice={90000}
              image="/images/simple-product.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              title="ایفون 16 پرو مکس 256/8 مشکی ساخت هند"
              originalPrice={100000}
              discountPercentage={10}
              discountedPrice={90000}
              image="/images/simple-product.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              title="ایفون 16 پرو مکس 256/8 مشکی ساخت هند"
              originalPrice={100000}
              discountPercentage={10}
              discountedPrice={90000}
              image="/images/simple-product.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              title="ایفون 16 پرو مکس 256/8 مشکی ساخت هند"
              originalPrice={100000}
              discountPercentage={10}
              discountedPrice={90000}
              image="/images/simple-product.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              title="ایفون 16 پرو مکس 256/8 مشکی ساخت هند"
              originalPrice={100000}
              discountPercentage={10}
              discountedPrice={90000}
              image="/images/simple-product.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              title="ایفون 16 پرو مکس 256/8 مشکی ساخت هند"
              originalPrice={100000}
              discountPercentage={10}
              discountedPrice={90000}
              image="/images/simple-product.jpg"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
