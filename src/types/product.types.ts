export type Product = {
  title: string;
  image: string;
  originalPrice: number;
  discountedPrice?: number;
  discountPercentage?: number;
  isFavorite?: boolean;
};
