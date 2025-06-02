import { useQuery } from '@tanstack/react-query';
import { getBanners } from '@/service/banners-services';

export function useGetBanners() {
  return useQuery({
    queryKey: ['banners'],
    queryFn: () => getBanners(),
  });
}
