export function imageUrl(name: string): string {
  return `http://localhost:8000/media/${name}`;
}

export function calculateDiscountPercentage(
  originalPrice: number,
  discountedPrice: number
): number {
  if (originalPrice <= 0) return 0;
  return Math.floor(((originalPrice - discountedPrice) / originalPrice) * 100);
}
