import { getProducts } from '@/service/products-services';

export default async function HomePage({ searchParams }: any) {
  // تبدیل searchParams به query string
  const queryString = new URLSearchParams(await searchParams).toString();
  console.log('queryString', queryString);
  const queryPath = queryString ? `${queryString}` : '';
  console.log('queryPath', queryPath);

  // ارسال به getProducts
  const products = await getProducts(queryPath);
  console.log('products', products);

  return (
    <div>
      <p>hi</p>
    </div>
  );
}
