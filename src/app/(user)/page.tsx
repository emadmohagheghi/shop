import Image from 'next/image';
import { Carousel } from '../_components/ui/carousel';
import { OffersSlider } from '../_components/home-components/offers-slider';
import { HomeSlider } from '../_components/home-components/home-slider';
import { ProductCard } from '../_components/ui/product-card';
import { Accordion } from '../_components/ui/accordion';
import { Progress } from '../_components/ui/progress';

const categories = [
  {
    title: 'اپل',
    image: '/images/simple-product.jpg',
  },
  {
    title: 'اپل',
    image: '/images/simple-product.jpg',
  },
  {
    title: 'اپل',
    image: '/images/simple-product.jpg',
  },
  {
    title: 'اپل',
    image: '/images/simple-product.jpg',
  },
  {
    title: 'اپل',
    image: '/images/simple-product.jpg',
  },
  {
    title: 'اپل',
    image: '/images/simple-product.jpg',
  },
  {
    title: 'اپل',
    image: '/images/simple-product.jpg',
  },
  {
    title: 'اپل',
    image: '/images/simple-product.jpg',
  },
  {
    title: 'اپل',
    image: '/images/simple-product.jpg',
  },
];

const offersProducts = [
  {
    id: 3,
    image: 'images/2025/05/22/YgA2jQWdYlq3UOqg810b35PR0UH4ou.webp',
    title_ir: 'ایفون 16 پرو',
    title_en: 'ihpone 16 pro',
    url: '/product/21032/ihpone-16-pro',
    stockrecord: {
      sale_price: 145000,
      special_sale_price: 135000,
      special_sale_price_start_at: null,
      special_sale_price_end_at: null,
      num_stock: 10,
      in_order_limit: null,
    },
    track_stock: true,
    is_available_in_stock: true,
    brand: {
      title_ir: 'اپل',
      title_en: 'apple',
      slug: 'apple',
    },
  },
  {
    id: 3,
    image: 'images/2025/05/22/YgA2jQWdYlq3UOqg810b35PR0UH4ou.webp',
    title_ir: 'ایفون 16 پرو',
    title_en: 'ihpone 16 pro',
    url: '/product/21032/ihpone-16-pro',
    stockrecord: {
      sale_price: 145000,
      special_sale_price: 135000,
      special_sale_price_start_at: null,
      special_sale_price_end_at: null,
      num_stock: 10,
      in_order_limit: null,
    },
    track_stock: true,
    is_available_in_stock: true,
    brand: {
      title_ir: 'اپل',
      title_en: 'apple',
      slug: 'apple',
    },
  },
  {
    id: 3,
    image: 'images/2025/05/22/YgA2jQWdYlq3UOqg810b35PR0UH4ou.webp',
    title_ir: 'ایفون 16 پرو',
    title_en: 'ihpone 16 pro',
    url: '/product/21032/ihpone-16-pro',
    stockrecord: {
      sale_price: 145000,
      special_sale_price: 135000,
      special_sale_price_start_at: null,
      special_sale_price_end_at: null,
      num_stock: 10,
      in_order_limit: null,
    },
    track_stock: true,
    is_available_in_stock: true,
    brand: {
      title_ir: 'اپل',
      title_en: 'apple',
      slug: 'apple',
    },
  },
];

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

export default async function Home() {
  // Fetch data from API
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/content/home/data/`,
    { cache: 'no-store', next: { revalidate: 3600 } }
  );
  const data = await res.json();

  // Filter banners by position
  const sliderBanners = data.data.banners.filter(
    (b: any) => b.position === 'HOME_SLIDER_BANNER'
  );
  const sideBanners = data.data.banners.filter(
    (b: any) => b.position === 'HOME_SIDE_BANNER'
  );

  return (
    <>
      <div className="w-full">
        <HomeSlider sliderBanners={sliderBanners} sideBanners={sideBanners} />
        <div className="container p-3">
          {/* categories */}
          <Carousel>
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-[#fff] rounded-lg text-lg flex flex-col justify-center items-center w-25 sm:w-36 lg:w-44 xl:w-60 p-1"
              >
                <Image
                  alt={category.title}
                  width={256}
                  height={256}
                  src={category.image}
                />
                <h4>{category.title}</h4>
              </div>
            ))}
          </Carousel>
        </div>
        <OffersSlider products={offersProducts} />
        {/* newest products */}
        <div className="container px-3 my-3">
          <Carousel
            className="text-primary stroke-primary"
            link="/products/newest"
            title="جدید ترین محصولات"
          >
            {offersProducts.map((product, index) => (
              <ProductCard {...product} key={index} />
            ))}
          </Carousel>
        </div>
        {/* banners */}
        <div className="container px-3 my-3">
          <Carousel className="text-primary stroke-primary">
            <div className="relative">
              <Image
                src="/images/simple-banner.png"
                alt=""
                width={808}
                height={421}
              />
            </div>
            <div>
              <Image
                src="/images/simple-banner.png"
                alt=""
                width={808}
                height={421}
              />
            </div>
            <div>
              <Image
                src="/images/simple-banner.png"
                alt=""
                width={808}
                height={421}
              />
            </div>
          </Carousel>
        </div>
        {/* faqs */}
        <div className="container my-5 px-3">
          <h5 className="text-3xl text-primary mb-8">سوالات متداول</h5>
          <Accordion data={accItems} />
        </div>
      </div>
    </>
  );
}
