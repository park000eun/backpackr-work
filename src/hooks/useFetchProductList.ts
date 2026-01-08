import { useInfiniteQuery } from '@tanstack/react-query';

import type { ProductListResponse } from '../types';
import { fetchProductList } from '../server/data/api';

export const useFetchProductList = () => {
  return useInfiniteQuery<ProductListResponse, Error>({
    queryKey: ['products', 'infinite'],
    queryFn: ({ pageParam = 1 }) => fetchProductList(pageParam as number),
    getNextPageParam: (lastPage) => {
      const { current, total } = lastPage.pagination;
      return current < total ? current + 1 : undefined;
    },
    initialPageParam: 1,
  });
};
