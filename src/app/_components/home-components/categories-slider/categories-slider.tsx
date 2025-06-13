import { CategoriesSliderProps } from './categories-slider.types';
import { Carousel } from '../../ui/carousel';
import { imageUrl } from '@/utils/product';
import Image from 'next/image';

export function CategoriesSlider({ categories }: CategoriesSliderProps) {
  return (
    <div className=''>
      <Carousel className="container">
        {categories.map((category) => (
          <div key={category.id} className="flex flex-col items-center bg-[#fff] rounded-2xl py-4 px-6 sm:px-12 mx-4">
            <Image
              src={imageUrl(category.image.name)}
              alt={category.title_ir}
              width={117}
              height={117}
              className="size-30 object-cover"
            />
            <span className="mt-6 text- font-medium">
              {category.title_ir}
            </span>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
