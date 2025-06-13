'use client';
import { useEffect } from 'react';
import { HeaderType } from '@/types/header.types';
import { useHeaderStore } from '@/stores/header-data.store';

type HeaderDataProviderProps = {
  children: React.ReactNode;
};

export const getHeaderData = async () => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + '/api/content/header/data/'
  );
  const data = await res.json();
  return data.data;
};

export default function HeaderDataProvider({
  children,
}: HeaderDataProviderProps) {
  const setHeaderData = useHeaderStore((state) => state.setHeaderData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getHeaderData();
        setHeaderData(data);
      } catch (error) {
        console.error('Error fetching header data:', error);
      }
    };
    fetchData();
  }, [setHeaderData]);

  return <>{children}</>;
}
