import { Carousel } from "../../ui/carousel";
import { ProductCard } from "../../ui/product-card";
import { ProductSliderProps } from "./product-slider.types";
export const ProductSlider = ({
  products,
  isLoading,
  className = "text-primary stroke-primary container",
  link,
  title,
}: ProductSliderProps) => {
  if (isLoading) {
    return (
      <Carousel className={className} link={link} title={title}>
        {Array(8)
          .fill(true)
          .map((_ , index) => (
            <div key={index} className="m-2 w-[170px] overflow-hidden rounded-lg shadow-md md:w-[200px]">
              {/* Image Skeleton */}
              <div className="shimmer h-48 w-full"></div>

              <div className="p-4">
                {/* Title Skeleton */}
                <div className="shimmer mb-2 h-6 rounded"></div>
                <div className="shimmer mb-3 h-6 w-3/4 rounded"></div>

                {/* Button Skeleton */}
                <div className="shimmer h-10 w-full rounded"></div>
              </div>
            </div>
          ))}
      </Carousel>
    );
  }
  return (
    <Carousel className={className} link={link} title={title}>
      {products.map((product) => (
        <ProductCard key={`newest-products-${product.id}`} {...product} />
      ))}
    </Carousel>
  );
};
