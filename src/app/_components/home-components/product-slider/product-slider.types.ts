import { Product } from "@/types/product.types";
import { CarouselProps } from "../../ui/carousel/carousel.types";

export type ProductSliderProps = Omit<CarouselProps , "children"> & {
  products: Product[];
  isLoading: boolean;
};
