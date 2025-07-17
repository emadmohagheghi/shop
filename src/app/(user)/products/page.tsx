import { SortOptions, Filters , ProductsGrid} from "./_components";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <div className="container flex min-h-screen w-full gap-4 bg-white">
      <div className="relative hidden w-1/4 p-2 lg:block">
        <Filters />
      </div>
      <div className="w-full p-2 lg:w-3/4 space-y-4">
        <SortOptions />
        <ProductsGrid />
      </div>
    </div>
  );
}
