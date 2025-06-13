import { getProducts } from '@/service/products-services';


const brandSlugToId: Record<string, number> = {
  samsung: 7,
  apple: 1,
  xiaomi: 2,
  huawei: 3,
  lg: 4,
  sony: 5,
};

export default async function HomePage({ searchParams }: { searchParams: Record<string, string> }) {
  const search = new URLSearchParams(await searchParams);
  const brandSlug = search.get('brand'); // مثلاً samsung

  if (brandSlug && brandSlugToId[brandSlug]) {
    const brandId = brandSlugToId[brandSlug];
    search.set('brand', brandId.toString());
  }

  const queryString = search.toString();
  const products = await getProducts(queryString);

  console.log(products)

  return (
    <div>
      <p>hi</p>
      <pre>{JSON.stringify(products, null, 2)}</pre>
    </div>
  );
}
