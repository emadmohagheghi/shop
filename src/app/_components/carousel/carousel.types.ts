import { Product } from '../types/product.types';

export type CarouselProps = {
  items: Product[] | string[];
  title?: string;
  link?: string;
  className?: string;
};
