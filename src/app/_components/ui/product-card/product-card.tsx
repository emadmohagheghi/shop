import Image from 'next/image';
import Link from 'next/link';
import { Heart } from 'iconsax-react';
import { Product } from '../../../../types/product.types';

export const ProductCard = ({
  image,
  originalPrice,
  title,
  discountPercentage,
  discountedPrice,
  isFavorite,
}: Product) => {
  return (
    <>
      <Link
        href={`products/${title}`}
        className="flex flex-col items-center w-[170px] md:w-[200px] bg-[#fff] p-3 gap-2 rounded-lg"
      >
        <div className="flex items-center justify-between w-full">
          <Heart
            className={`stroke-primary cursor-pointer ${
              isFavorite && 'fill-primary'
            }`}
            size={24}
          />
          {discountPercentage && (
            <span className="bg-error-focus px-4 py-[2px] rounded-full text-white">
              {discountPercentage}%
            </span>
          )}
        </div>
        <Image src={image} alt="" width={230} height={230} />
        <h3 className="text-center text-black font-bold text-sm md:text-lg line-clamp-2">
          {title}
        </h3>
        {discountedPrice && (
          <span
            className={`self-end font-bold text-sm md:text-lg line-through text-gray-600
          `}
          >
            {originalPrice.toLocaleString()} تومان
          </span>
        )}
        <span
          className={`self-end font-bold md:text-lg bg-primary text-white px-4 py-1.5 rounded-lg text-sm ${
            !discountedPrice && 'mt-2'
          }`}
        >
          {discountedPrice
            ? discountedPrice.toLocaleString()
            : originalPrice.toLocaleString()}{' '}
          تومان
        </span>
      </Link>
    </>
  );
};
