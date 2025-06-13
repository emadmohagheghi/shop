import { CategoriesSliderProps } from "./categories-slider.types";
import { Carousel } from "../../ui/carousel";
import { imageUrl } from "@/utils/product";
import Image from "next/image";

export function CategoriesSlider({ categories }: CategoriesSliderProps) {
  return (
    <div className="">
      <Carousel className="container">
        {categories.map((category) => (
          <div
            key={category.id}
            className="mx-4 flex flex-col items-center rounded-2xl bg-[#fff] px-6 py-4 sm:px-12"
          >
            <Image
              src={imageUrl(category.image.name)}
              alt={category.title_ir}
              width={117}
              height={117}
              className="size-30 object-cover"
            />
            <span className="text- mt-6 font-medium">{category.title_ir}</span>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
