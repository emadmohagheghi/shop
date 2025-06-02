import type { BestSellingProsuctsProps } from './best-selling-products.types';
import { Carousel } from '../../ui/carousel';
import { ProductCard } from '../../ui/product-card';

export const BestSellingProducts = ({ products }: BestSellingProsuctsProps) => {
  return (
    <div className="container">
      <Carousel className='text-primary stroke-primary' link='/products' title="پیشنهادات">
        {products.map((product, index) => (
          <ProductCard key={`newest-products-${product.id}`} {...product} />
        ))}
      </Carousel>
    </div>
  );
};
