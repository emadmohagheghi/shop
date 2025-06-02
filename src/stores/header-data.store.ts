import { HeaderType } from '@/types/header.types';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type HeaderStoreActions = {
  setHeaderData: (header: HeaderType) => void;
};

export const useHeaderStore = create<HeaderType & HeaderStoreActions>()(
  devtools((set, get) => ({
    categories: [],
    brands: [],
    setHeaderData: (header: HeaderType) => {
      set((state) => ({
        categories: header.categories,
        brands: header.brands,
      }));
    },
  }))
);
