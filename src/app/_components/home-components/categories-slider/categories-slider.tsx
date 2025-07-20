import { CategoriesSliderProps } from "./categories-slider.types";
import { Carousel } from "../../ui/carousel";
import { imageUrl } from "@/utils/product";
import Image from "next/image";
import Link from "next/link";

export function CategoriesSlider({ categories }: CategoriesSliderProps) {
  // loading state
  if (categories.length === 0) {
    return (
      <Carousel className="container">
        {Array(6)
          .fill(true)
          .map((_ , index) => (
            <div key={index} className="shimmer mx-4 h-[160px] w-[130px] rounded-2xl bg-[#fff] px-6 py-4 sm:px-12 md:h-[200px] md:w-[216px]"></div>
          ))}
      </Carousel>
    );
  }

  return (
    <div>
      <Carousel className="container">
        {categories.map((category) => (
          <Link
            href={`/products?category=${category.slug}`}
            key={category.id}
            className="mx-2 flex flex-col items-center rounded-2xl bg-[#fff] px-6 py-4 sm:px-12 lg:mx-4"
          >
            <Image
              src={imageUrl(category.image.name)}
              alt={category.title_ir}
              width={117}
              height={117}
              className="size-20 object-cover md:size-30"
            />
            <span className="text- mt-6 font-medium">{category.title_ir}</span>
          </Link>
        ))}
      </Carousel>
    </div>
  );
}
