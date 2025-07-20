"use client";
import { useGetProducts } from "@/hooks/useProducts";
import { useProductsFilters } from "@/hooks/useProductFilter";
import { ProductCard } from "@/app/_components/ui/product-card";
import { Warning2, Box } from "iconsax-react";

export default function ProductsGrid() {
  const {
    filters: { sort, category, brand, special },
  } = useProductsFilters();

  // Build query parameters
  const queryParams = new URLSearchParams();
  if (sort) queryParams.append("sort", sort);
  if (category) queryParams.append("categorySlug", category);
  if (brand) queryParams.append("brand", brand.toString());
  if (special) queryParams.append("special", "true");

  const queryString = queryParams.toString()
    ? `?${queryParams.toString()}`
    : "";

  const {
    data: products,
    isLoading,
    isFetching,
    error,
    refetch,
  } = useGetProducts(queryString);

  if (isLoading || isFetching) {
    return <ProductsGridSkeleton />;
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg bg-[#fff] p-12 text-center shadow-sm">
        <Warning2 size={48} className="mb-4 text-red-500" />
        <h3 className="mb-2 text-lg font-semibold text-gray-900">
          خطا در بارگذاری محصولات
        </h3>
        <p className="mb-4 text-gray-600">
          متاسفانه امکان دریافت محصولات وجود ندارد
        </p>
        <button
          onClick={() => refetch()}
          className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          تلاش مجدد
        </button>
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg bg-[#fff] p-12 text-center shadow-sm">
        <Box size={48} className="mb-4 text-gray-400" />
        <h3 className="mb-2 text-lg font-semibold text-gray-900">
          محصولی یافت نشد
        </h3>
        <p className="text-gray-600">
          با فیلترهای انتخابی شما محصولی موجود نیست
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Products Grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex w-full justify-center rounded-lg bg-[#fff] shadow"
          >
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </div>
  );
}

// Skeleton component for loading state
function ProductsGridSkeleton() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className="animate-pulse rounded-lg bg-white p-4 shadow-sm"
          >
            <div className="aspect-square w-full rounded-lg bg-gray-200"></div>
            <div className="mt-3 space-y-2">
              <div className="h-4 rounded bg-gray-200"></div>
              <div className="h-4 w-3/4 rounded bg-gray-200"></div>
            </div>
            <div className="mt-4 space-y-2">
              <div className="h-3 w-1/2 rounded bg-gray-200"></div>
              <div className="h-6 w-3/4 rounded bg-gray-200"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
