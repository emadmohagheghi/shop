'use client';

import { ProductCard } from '../../ui/product-card';
import { ArrowLeft2 } from 'iconsax-react';

import Link from 'next/link';
import { Timer } from '../../ui/timer';
import { Carousel } from '../../ui/carousel';
import { Product } from '../../../../types/product.types';

export const OffersSlider = ({ products }: { products: Product[] }) => {
  return (
    <div className="container my-3 px-3">
      <div className="bg-primary rounded-lg !p-3">
        <div className="w-full text-white lg:hidden flex justify-between mb-1">
          <p className="text-xl">تخفیف های شگفت انگیز</p>
          <Link className="flex items-center" href="">
            <p className="text-sm">مشاهده همه</p>
            <ArrowLeft2 color="white" size={22} />
          </Link>
        </div>

        <Carousel>
          <Link
            href="/products/offers"
            className="w-[300px] h-full lg:flex flex-col justify-center items-center gap-12 p-5 mt-5 text-white hidden"
          >
            <h3 className="text-center font-medium text-[40px] leading-[140%] mt-auto">
              تخفیف های شگفت انگیز
            </h3>
            <Timer initialSeconds={150} />
            <p className="flex items-center self-start">
              مشاهده همه
              <ArrowLeft2 color="white" size={24} />
            </p>
          </Link>
          {products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              title={product.title}
              originalPrice={product.originalPrice}
              discountPercentage={product.discountPercentage}
              discountedPrice={product.discountedPrice}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};
