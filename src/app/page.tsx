import Image from 'next/image';
import { Input } from './_components/input';
import { SearchNormal1 } from 'iconsax-react';
import { HomeSlider } from './_components/home-slider';
import { ProductCard } from './_components/productCard';

export default function Home() {
  return (
    <>
      <div className="w-full">
        <HomeSlider />
        <ProductCard
          title="simple name"
          image="/images/simple-product.jpg"
          originalPrice={10000}
          discountPercentage={10}
          discountedPrice={9000}
        />
      </div>
    </>
  );
}
