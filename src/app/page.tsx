"use client";
import { useGetBanners } from "@/hooks/useBanners";
import {
  useGetSpecialProducts,
  useGetNewestProducts,
  useGetBestSellingProducts,
} from "@/hooks/useProducts";
import { HomeSlider } from "./_components/home-components/home-slider";
import { CategoriesSlider } from "./_components/home-components/categories-slider";
import { OffersSlider } from "./_components/home-components/offers-slider";
import { Carousel } from "./_components/ui/carousel";
import Image from "next/image";
import { imageUrl } from "@/utils/product";
import { useHeaderStore } from "@/stores/header-data.store";
import Link from "next/link";
import { ArrowLeft2 } from "iconsax-react";
import { Accordion } from "./_components/ui/accordion";
import { ProductSlider } from "./_components/home-components/product-slider";
import { Features } from "./_components/home-components/features/features";

const accItems = [
  {
    id: 1,
    title: "شرایط و نحوه مرجوعی کالا به چه صورت است؟",
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
  },
  {
    id: 2,
    title: "آیا امکان خرید حصوری فراهم است؟",
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
  },
  {
    id: 3,
    title: "چطور میتونم سفارشم را لغو کنم؟",
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
  },
  {
    id: 4,
    title: "امکان خرید اقساطی در سایت چطونه است؟",
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
  },
];

export default function Home() {
  const { data: banners = [], isLoading: isGettingBanners } = useGetBanners();

  const { data: specialProducts = [], isLoading: isGettingspecialProducts } =
    useGetSpecialProducts();

  const { data: newestProducts = [], isLoading: isGettingNewestProducts } =
    useGetNewestProducts();

  const {
    data: bestSellingProducts = [],
    isLoading: isGettingBestSellingProducts,
  } = useGetBestSellingProducts();

  const { categories, brands } = useHeaderStore();

  return (
    <>
      <div className="w-full space-y-12 overflow-hidden px-5">
        <HomeSlider banners={banners} isLoading={isGettingBanners} />
        <CategoriesSlider categories={categories} />
        <OffersSlider
          products={specialProducts}
          isLoading={isGettingspecialProducts}
        />

        <ProductSlider
          className="text-primary stroke-primary container"
          link="/products"
          title="جدیدترین محصولات"
          products={newestProducts}
          isLoading={isGettingNewestProducts}
        />

        {/* second banner slider */}
        <div className="container">
          <Carousel>
            <Image
              src="/images/banner/banner-1.png"
              alt=""
              width={800}
              height={400}
            />
            <Image
              src="/images/banner/banner-1.png"
              alt=""
              width={800}
              height={400}
            />
            <Image
              src="/images/banner/banner-1.png"
              alt=""
              width={800}
              height={400}
            />
          </Carousel>
        </div>

        <ProductSlider
          className="text-primary stroke-primary container"
          link="/products"
          title="پیشنهادات"
          products={bestSellingProducts}
          isLoading={isGettingBestSellingProducts}
        />

        {/* papular brands */}
        <div className="container mb-16">
          <div className="border-primary text-primary flex w-full justify-between border-b-2 pb-3 text-2xl">
            <p className="font-medium">محبوب ترین برند ها</p>
          </div>
          <Carousel>
            {brands.map((brand , index) => (
              <Link
              key={"popular-brand-" + index}
                href={"/products?brand=" + brand.slug}
                className="mx-2 mt-3 flex flex-col items-center rounded-xl bg-[#fff] p-3 lg:mx-4 lg:p-5"
              >
                <Image
                  width={240}
                  height={240}
                  src={imageUrl(brand.image.name)}
                  alt={brand.title_ir}
                  className="size-28 object-contain md:size-44"
                />
                <h4 className="text-xl">{brand.title_ir}</h4>
              </Link>
            ))}
          </Carousel>
        </div>
        {/* banner */}
        <div className="bg-primary container flex rounded-2xl px-8 py-12 *:w-1/2">
          <div className="flex flex-col items-start justify-center gap-5 text-white lg:pr-18">
            <h3 className="text-base font-medium sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl">
              ساعت های هوشمند
            </h3>
            <p className="text-sm sm:text-xl md:text-2xl xl:text-3xl">
              تجربه جذاب از آینده
            </p>
            <Link
              className="text-primary mt-5 flex items-center rounded-lg bg-white px-3 py-2 text-sm text-nowrap lg:text-lg"
              href=""
            >
              مشاهده
              <ArrowLeft2 className="stroke-primary size-6" />
            </Link>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="bg-gradient absolute top-1/2 left-1/2 z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial from-white from-40% to-transparent text-black blur-3xl"></div>
            <Image
              className="z-20"
              src="/images/banner/banner-2.png"
              alt=""
              width={500}
              height={338}
            />
          </div>
        </div>
        {/* accordion */}
        <div className="container">
          <div className="border-primary text-primary mb-4 border-b-2 pb-3 text-2xl font-medium">
            سوالات متداول
          </div>
          <Accordion data={accItems} />
        </div>
        {/* features */}
        <Features />
      </div>
    </>
  );
}
