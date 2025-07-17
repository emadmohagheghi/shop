import { useQuery } from "@tanstack/react-query";
import {
  getProducts,
  getSpecialProducts,
  getNewestProducts,
  getBestSellingProducts,
} from "@/service/products-services";

export function useGetProducts(query?: string) {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(query),
  });
}

export function useGetNewestProducts() {
  return useQuery({
    queryKey: ["newset-products"],
    queryFn: () => getNewestProducts(),
  });
}

export function useGetBestSellingProducts() {
  return useQuery({
    queryKey: ["best-selling-products"],
    queryFn: () => getBestSellingProducts(),
  });
}

export function useGetSpecialProducts() {
  return useQuery({
    queryKey: ["special-products"],
    queryFn: () => getSpecialProducts(),
  });
}
