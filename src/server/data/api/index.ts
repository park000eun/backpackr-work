import { Product, ProductListResponse, Pagination } from '@/src/types';

const BASE_URL = 'http://localhost:3000';

export const fetchProductList = async (page: number): Promise<ProductListResponse> => {
  const response = await fetch(`${BASE_URL}/page${page}.json`);
  const data = await response.json();

  return {
    items: data.items as Product[],
    pagination: data.pagination as Pagination,
  };
};
