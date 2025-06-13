import Image from "next/image";
import Link from "next/link";
import { Heart } from "iconsax-react";
import { Product } from "../../../../types/product.types";
import { calculateDiscountPercentage, imageUrl } from "@/utils/product";

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
    special_sale_price || 0,
  );
  return (
    <>
      <Link
        href={`products/${title_en}`}
        className="flex w-[170px] flex-col items-center gap-2 rounded-lg bg-[#fff] p-3 md:w-[200px]"
      >
        <div className="flex w-full items-center justify-between">
          <Heart
            className={`stroke-primary cursor-pointer ${
              isFavorite && "fill-primary"
            }`}
            size={24}
          />
          {discountPercentage && (
            <span className="bg-error-focus rounded-full px-4 py-[2px] text-white">
              {discountPercentage}%
            </span>
          )}
        </div>
        <Image src={imageUrl(image)} alt="" width={230} height={230} />
        <h3 className="line-clamp-2 text-center text-sm font-bold text-black md:text-lg">
          {title_ir}
        </h3>
        <span
          className={`self-end text-sm font-bold text-gray-600 line-through md:text-lg ${!special_sale_price && "opacity-0"} `}
        >
          {sale_price.toLocaleString()} تومان
        </span>
        <span
          className={`bg-primary self-end rounded-lg px-4 py-1.5 text-sm font-bold text-white md:text-lg ${
            !special_sale_price && "mt-2"
          }`}
        >
          {special_sale_price
            ? special_sale_price.toLocaleString()
            : sale_price.toLocaleString()}{" "}
          تومان
        </span>
      </Link>
    </>
  );
};
