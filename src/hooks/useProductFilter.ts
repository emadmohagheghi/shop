"use client";

import { useQueryState, parseAsString, parseAsInteger } from "nuqs";

export function useProductsFilters() {
  const [isAvailable, setIsAvailable] = useQueryState(
    "available",
    parseAsString,
  );
  const [brand, setBrand] = useQueryState("brand", parseAsString);
  const [category, setCategory] = useQueryState("category", parseAsString);
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
  const [minPrice, setMinPrice] = useQueryState("minPrice", parseAsInteger);
  const [maxPrice, setMaxPrice] = useQueryState("maxPrice", parseAsInteger);
  const [search, setSearch] = useQueryState("search", parseAsString);
  const [sort, setSort] = useQueryState("sort", parseAsString.withDefault("1"));
  const [special, setSpecial] = useQueryState("special", parseAsString);

  const clearFilters = () => {
    setCategory(null);
    setBrand(null);
    setMinPrice(null);
    setMaxPrice(null);
    setSort("1");
    setPage(1);
    setSearch(null);
    setSpecial(null);
    setIsAvailable(null);
  };

  const resetPage = () => {
    setPage(1);
  };

  return {
    filters: {
      category,
      brand,
      minPrice,
      maxPrice,
      sort,
      page,
      search,
      special: special === "true",
      isAvailable: isAvailable === "true",
    },
    setters: {
      setCategory,
      setBrand,
      setMinPrice,
      setMaxPrice,
      setSort,
      setPage,
      setSearch,
      setSpecial: (value: boolean) => setSpecial(value ? "true" : null),
      setIsAvailable: (value: boolean) => setIsAvailable(value ? "true" : null),
    },
    actions: {
      clearFilters,
      resetPage,
    },
  };
}
