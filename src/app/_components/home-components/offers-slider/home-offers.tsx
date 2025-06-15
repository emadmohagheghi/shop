"use client";

import { ProductCard } from "../../ui/product-card";
import { ArrowLeft2 } from "iconsax-react";

import Link from "next/link";
import { Timer } from "../../ui/timer";
import { Carousel } from "../../ui/carousel";
import { HomeOffersProps } from "./home-offers.types";

export const OffersSlider = ({ products , isLoading}: HomeOffersProps) => {
  return (
    <div className="container">
      <div className="bg-primary space-y-2 rounded-lg !p-3">
        <div className="flex w-full justify-between text-white lg:hidden">
          <p className="text-xl">تخفیف های شگفت انگیز</p>
          <Link className="flex items-center" href="">
            <p className="text-sm">مشاهده همه</p>
            <ArrowLeft2 color="white" size={22} />
          </Link>
        </div>

        <Carousel>
          <Link
            href="/products/offers"
            className="mt-5 hidden h-full w-[300px] flex-col items-center justify-center gap-12 p-5 text-white lg:flex"
          >
            <h3 className="mt-auto text-center text-[40px] leading-[140%] font-medium">
              تخفیف های شگفت انگیز
            </h3>
            <Timer initialSeconds={150} />
            <p className="flex items-center self-start">
              مشاهده همه
              <ArrowLeft2 color="white" size={24} />
            </p>
          </Link>
          {products.map((product) => (
            <ProductCard key={`product-${product.id}`} {...product} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};
