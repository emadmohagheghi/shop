import Image from 'next/image';
import { Carousel } from '../_components/carousel';
import { OffersSlider } from '../_components/home-components/offers-slider';
import { HomeSlider } from '../_components/home-components/home-slider';
import { ProductCard } from '../_components/product-card';
import { Accordion } from '../_components/accordion';

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
    originalPrice: 100000,
    image: '/images/simple-product.jpg',
    title: 'ایفون 16 پرو مکس 256/8',
    discountPercentage: 10,
    discountedPrice: 90000,
  },
  {
    originalPrice: 100000,
    image: '/images/simple-product.jpg',
    title: 'ایفون 16 پرو مکس 256/8',
    discountPercentage: 10,
    discountedPrice: 90000,
  },
  {
    originalPrice: 100000,
    image: '/images/simple-product.jpg',
    title: 'ایفون 16 پرو مکس 256/8',
    discountPercentage: 10,
    discountedPrice: 90000,
  },
  {
    originalPrice: 100000,
    image: '/images/simple-product.jpg',
    title: 'ایفون 16 پرو مکس 256/8',
    discountPercentage: 10,
    discountedPrice: 90000,
  },
  {
    originalPrice: 100000,
    image: '/images/simple-product.jpg',
    title: 'ایفون 16 پرو مکس 256/8',
    discountPercentage: 10,
    discountedPrice: 90000,
  },
  {
    originalPrice: 100000,
    image: '/images/simple-product.jpg',
    title: 'ایفون 16 پرو مکس 256/8',
    discountPercentage: 10,
    discountedPrice: 90000,
  },
  {
    originalPrice: 100000,
    image: '/images/simple-product.jpg',
    title: 'ایفون 16 پرو مکس 256/8',
    discountPercentage: 10,
    discountedPrice: 90000,
  },
  {
    originalPrice: 100000,
    image: '/images/simple-product.jpg',
    title: 'ایفون 16 پرو مکس 256/8',
    discountPercentage: 10,
    discountedPrice: 90000,
  },
];

const accItems = [
  {
    id: 1,
    title: 'شرایط و نحوه مرجوعی کالا به چه صورت است؟',
    content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
  },
  {
    id: 2,
    title: 'آیا امکان خرید حصوری فراهم است؟',
    content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
  },
  {
    id: 3,
    title: 'چطور میتونم سفارشم را لغو کنم؟',
    content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
  },
  {
    id: 4,
    title: 'امکان خرید اقساطی در سایت چطونه است؟',
    content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
  },
];

export default function Home() {
  return (
    <>
      <div className="w-full">
        <HomeSlider />
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
        {/* faqs */}
        <div className='container my-5 px-3'>
            <h5 className='text-3xl text-primary mb-8'>سوالات متداول</h5>
            <Accordion data={accItems} />
        </div>
      </div>
    </>
  );
}
