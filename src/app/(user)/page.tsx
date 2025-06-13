'use client';
import { useGetBanners } from '@/hooks/useBanners';
import {
  useGetSpecialProducts,
  useGetNewestProducts,
  useGetBestSellingProducts,
} from '@/hooks/useProducts';
import { HomeSlider } from '../_components/home-components/home-slider';
import { CategoriesSlider } from '../_components/home-components/categories-slider';
import { OffersSlider } from '../_components/home-components/offers-slider';
import { Carousel } from '../_components/ui/carousel';
import { NewestProducts } from '../_components/home-components/newest-products';
import { BestSellingProducts } from '../_components/home-components/best-selling-products';
import Image from 'next/image';
import { imageUrl } from '@/utils/product';
import { useHeaderStore } from '@/stores/header-data.store';
import Link from 'next/link';
import { ArrowLeft2 } from 'iconsax-react';
import { Accordion } from '../_components/ui/accordion';
import { Footer } from '../_components/footer';

const accItems = [
  {
    id: 1,
    title: 'شرایط و نحوه مرجوعی کالا به چه صورت است؟',
    content:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
  },
  {
    id: 2,
    title: 'آیا امکان خرید حصوری فراهم است؟',
    content:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
  },
  {
    id: 3,
    title: 'چطور میتونم سفارشم را لغو کنم؟',
    content:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
  },
  {
    id: 4,
    title: 'امکان خرید اقساطی در سایت چطونه است؟',
    content:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
  },
];

export default function Home() {
  const { data: Banners, isLoading: isGettingBanners } = useGetBanners();

  const { data: specialProducts, isLoading: isGettingspecialProducts } =
    useGetSpecialProducts();

  const { data: newestProducts, isLoading: isGettingNewestProducts } =
    useGetNewestProducts();

  const { data: bestSellingProducts, isLoading: isGettingBestSellingProducts } =
    useGetBestSellingProducts();

  const { categories, brands } = useHeaderStore();

  return (
    <>
      <div className="w-full space-y-12 px-5 overflow-hidden">
        {Banners && <HomeSlider banners={Banners} />}
        {categories && <CategoriesSlider categories={categories} />}
        {specialProducts && <OffersSlider products={specialProducts} />}
        {newestProducts && <NewestProducts products={newestProducts} />}
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
        {bestSellingProducts && (
          <BestSellingProducts products={bestSellingProducts} />
        )}
        {/* papular brands */}
        <div className="container mb-16">
          <div className="border-b-2 border-primary flex w-full justify-between text-primary text-2xl pb-3">
            <p className="font-medium">محبوب ترین برند ها</p>
          </div>
          <Carousel>
            {brands.map((brand) => (
              <Link
                href={'/products?brand=' + brand.slug}
                className="flex flex-col items-center mx-2 p-3 lg:mx-4 lg:p-5 bg-[#fff] mt-3 rounded-xl"
              >
                <Image
                  width={240}
                  height={240}
                  src={imageUrl(brand.image.name)}
                  alt={brand.title_ir}
                  className="md:size-44 size-28 object-contain"
                />
                <h4 className="text-xl">{brand.title_ir}</h4>
              </Link>
            ))}
          </Carousel>
        </div>
        {/* banner */}
        <div className="container bg-primary rounded-2xl flex px-8 py-12 *:w-1/2">
          <div className="flex flex-col items-start justify-center text-white gap-5 lg:pr-18">
            <h3 className="font-medium text-base sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl">
              ساعت های هوشمند
            </h3>
            <p className="text-sm sm:text-xl md:text-2xl xl:text-3xl">
              تجربه جذاب از آینده
            </p>
            <Link
              className="text-sm lg:text-lg text-nowrap bg-white text-primary px-3 py-2 rounded-lg flex items-center mt-5"
              href=""
            >
              مشاهده
              <ArrowLeft2 className="size-6 stroke-primary" />
            </Link>
          </div>
          <div className="flex justify-center items-center relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient bg-radial blur-3xl from-40% from-white to-transparent z-10 text-black"></div>
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
          <div className="border-b-2 border-primary text-2xl text-primary font-medium mb-4 pb-3">
            سوالات متداول
          </div>
          <Accordion data={accItems} />
        </div>
        {/* features */}
        <div className="container flex flex-wrap justify-between text-lg gap-5 *:flex *:flex-col-reverse *:lg:flex-row *:items-center *:justify-center *:gap-2 *:flex-1 *:min-w-[45%] *:lg:min-w-fit">
          <div className="">
            <p className="whitespace-nowrap">پشتیبانی 24 ساعته</p>
            <Image alt="" width={72} height={72} src="/images/features/1.svg" />
          </div>
          <div className="">
            <p className="whitespace-nowrap">تحویل سریع</p>
            <Image alt="" width={72} height={72} src="/images/features/2.svg" />
          </div>
          <div className="">
            <p className="whitespace-nowrap">ضمانت کالا</p>
            <Image alt="" width={72} height={72} src="/images/features/3.svg" />
          </div>
          <div className="">
            <p className="whitespace-nowrap">جدیدترین تکنولوژی</p>
            <Image alt="" width={72} height={72} src="/images/features/4.svg" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
