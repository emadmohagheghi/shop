import type { NewestProductsProps } from "./newest-products.types";
import { Carousel } from "../../ui/carousel";
import { ProductCard } from "../../ui/product-card";

export const NewestProducts = ({ products }: NewestProductsProps) => {
  return (
    <div className="container">
      <Carousel
        className="text-primary stroke-primary"
        link="/products"
        title="جدید ترین محصولات"
      >
        {products.map((product, index) => (
          <ProductCard key={`newest-products-${product.id}`} {...product} />
        ))}
      </Carousel>
    </div>
  );
};
