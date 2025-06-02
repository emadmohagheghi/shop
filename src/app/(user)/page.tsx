'use client';
import { useGetBanners } from '@/hooks/useBanners';
import {
  useGetSpecialProducts,
  useGetNewestProducts,
  useGetBestSellingProducts,
} from '@/hooks/useProducts';
// import { useGetCategories, useGetBrands } from '@/hooks/useCategories';
import { HomeSlider } from '../_components/home-components/home-slider';
import { CategoriesSlider } from '../_components/home-components/categories-slider';
import { OffersSlider } from '../_components/home-components/offers-slider';
import { Carousel } from '../_components/ui/carousel';
import { NewestProducts } from '../_components/home-components/newest-products';
import { BestSellingProducts } from '../_components/home-components/best-selling-products';
import Image from 'next/image';
import { imageUrl } from '@/utils/product';
import { headerData } from '@/providers/header-data-provider';

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

  // const { data: categories, isLoading: isGettingCategories } =
  //   useGetCategories();

  const { data: newestProducts, isLoading: isGettingNewestProducts } =
    useGetNewestProducts();

  const { data: bestSellingProducts, isLoading: isGettingBestSellingProducts } =
    useGetBestSellingProducts();

  // const { data: brands, isLoading: isGettingBrands } = useGetBrands();

  return (
    <>
      <div className="w-full space-y-12">
        {Banners && <HomeSlider banners={Banners} />}
        {/* {categories && <CategoriesSlider categories={categories} />} */}
        {specialProducts && <OffersSlider products={specialProducts} />}
        {newestProducts && <NewestProducts products={newestProducts} />}
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
        <div className="container mb-16">
          <div className="border-b-2 border-primary flex w-full justify-between text-primary text-2xl">
            <p>محبوب ترین برند ها</p>
          </div>
          <Carousel>
            {headerData.brands.map((brand) => (
              <div>{brand.title_ir}</div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
}
