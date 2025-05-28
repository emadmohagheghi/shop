import Image from 'next/image';
import Link from 'next/link';
import { Heart } from 'iconsax-react';
import { Product } from '../../../../types/product.types';
import { calculateDiscountPercentage, imageUrl } from '@/utils/product';

export const ProductCard = ({
  id,
  image,
  stockrecord,
  title_ir,
  title_en,
  isFavorite,
  url,
}: Product) => {
  const { sale_price, special_sale_price } = stockrecord;
  const discountPercentage = calculateDiscountPercentage(
    sale_price,
    special_sale_price || 0
  );
  return (
    <>
      <Link
        href={`products/${title_en}`}
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
        <Image src={imageUrl(image)} alt="" width={230} height={230} />
        <h3 className="text-center text-black font-bold text-sm md:text-lg line-clamp-2">
          {title_ir}
        </h3>
        {special_sale_price && (
          <span
            className={`self-end font-bold text-sm md:text-lg line-through text-gray-600
          `}
          >
            {sale_price.toLocaleString()} تومان
          </span>
        )}
        <span
          className={`self-end font-bold md:text-lg bg-primary text-white px-4 py-1.5 rounded-lg text-sm ${
            !special_sale_price && 'mt-2'
          }`}
        >
          {special_sale_price
            ? special_sale_price.toLocaleString()
            : sale_price.toLocaleString()}{' '}
          تومان
        </span>
      </Link>
    </>
  );
};
