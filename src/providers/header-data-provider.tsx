import { HeaderType } from '@/types/header.types';

interface HeaderDataProviderProps {
  children: React.ReactNode;
}

const getHeaderData = async () => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + '/api/content/header/data/'
  );
  const data = await res.json();
  return data.data;
};

export const headerData: HeaderType = await getHeaderData();

export default function HeaderDataProvider({
  children,
}: HeaderDataProviderProps) {
  return <>{children}</>;
}
