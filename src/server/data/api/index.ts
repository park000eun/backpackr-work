import { Product, ProductListResponse, Pagination } from '@/src/types';

export const fetchProductList = async (page: number): Promise<ProductListResponse> => {
  const response = await fetch(`/page${page}.json`);
  const data = await response.json();

  return {
    items: data.items as Product[],
    pagination: data.pagination as Pagination,
  };
};
