export type Product = {
  id: number;
  image: string;
  title_ir: string;
  title_en: string;
  url: string;
  stockrecord: {
    sale_price: number;
    special_sale_price?: number | null;
    special_sale_price_start_at: Date | null;
    special_sale_price_end_at: Date | null;
    num_stock?: number;
    in_order_limit?: number | null;
  };
  track_stock?: boolean;
  is_available_in_stock?: boolean;
  brand: {
    title_ir: string;
    title_en: string;
    slug: string;
  };
  isFavorite?: boolean;
};
