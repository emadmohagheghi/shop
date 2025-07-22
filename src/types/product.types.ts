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

export type ProductDetail = {
  id: 0;
  product_class: {
    id: 0;
    title_ir: "string";
    title_en: "string";
    track_stock: true;
    require_shipping: true;
    properties: [
      {
        id: 0;
        name: "string";
      },
    ];
  };
  structure: "standalone";
  children: [
    {
      id: 0;
      stockrecord: {
        id: 0;
        sku: "string";
        sale_price: 0;
        special_sale_price: "string";
        special_sale_price_start_at: "string";
        special_sale_price_end_at: "string";
        num_stock: 0;
        in_order_limit: 0;
      };
      attribute_values: [
        {
          id: 0;
          attribute: {
            title: "string";
            type: "text";
            option_group: {
              id: 0;
              title: "string";
            };
            required: true;
          };
          value_text: "string";
          value_integer: 0;
          value_float: 0;
          value_option: {
            id: 0;
            title: "string";
            color_code: "string";
            group: {
              id: 0;
              title: "string";
            };
          };
          value_multi_option: [
            {
              id: 0;
              title: "string";
              color_code: "string";
              group: {
                id: 0;
                title: "string";
              };
            },
          ];
        },
      ];
      images: [
        {
          id: 0;
          image: {
            name: "string";
          };
        },
      ];
    },
  ];
  attribute_values: [
    {
      id: 0;
      attribute: {
        title: "string";
        type: "text";
        option_group: {
          id: 0;
          title: "string";
        };
        required: true;
      };
      value_text: "string";
      value_integer: 0;
      value_float: 0;
      value_option: {
        id: 0;
        title: "string";
        color_code: "string";
        group: {
          id: 0;
          title: "string";
        };
      };
      value_multi_option: [
        {
          id: 0;
          title: "string";
          color_code: "string";
          group: {
            id: 0;
            title: "string";
          };
        },
      ];
    },
  ];
  images: [
    {
      id: 0;
      image: {
        name: "string";
      };
    },
  ];
  url: "string";
  title_ir: "string";
  title_en: "string";
  description: "string";
  stockrecord: {
    id: 0;
    sku: "string";
    sale_price: 0;
    special_sale_price: "string";
    special_sale_price_start_at: "string";
    special_sale_price_end_at: "string";
    num_stock: 0;
    in_order_limit: 0;
  };
  is_available_in_stock: "string";
  brand: {
    id: 0;
    image: {
      name: "string";
    };
    title_ir: "string";
    title_en: "string";
    slug: "nvlIgGK8t7kYfA1VKIBvp3MjY8bVghGQf7VE-woDLVUBrmnrH9";
  };
  meta_title: "string";
  meta_description: "string";
  recommended_products: [
    {
      id: 0;
      image: "string";
      title_ir: "string";
      title_en: "string";
      url: "string";
      stockrecord: {
        sale_price: 0;
        special_sale_price: "string";
        special_sale_price_start_at: "string";
        special_sale_price_end_at: "string";
        num_stock: 0;
        in_order_limit: 0;
      };
      track_stock: "string";
      is_available_in_stock: "string";
      brand: {
        title_ir: "string";
        title_en: "string";
        slug: "06T8TjVzUKTCJyubkr6gb2QZKCW7AZ23dTaxp_E-wpW";
      };
    },
  ];
};
