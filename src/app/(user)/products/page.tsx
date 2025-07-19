import { SortOptions, Filters, ProductsGrid } from "./_components";

export default function HomePage() {
  return (
    <div className="container flex min-h-screen w-full flex-col gap-4 bg-white lg:flex-row">
      <div className="relative p-2 lg:block lg:w-1/4">
        <div className="flex w-full gap-4 lg:sticky lg:top-40">
          <Filters />
          <div className="w-full flex-1 lg:hidden">
            <SortOptions />
          </div>
        </div>
      </div>
      <div className="w-full space-y-4 p-2 lg:w-3/4">
        <div className="hidden lg:block">
          <SortOptions />
        </div>
        <ProductsGrid />
      </div>
    </div>
  );
}
