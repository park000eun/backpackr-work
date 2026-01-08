import { Review, Badge, Promotion, Pagination } from './common';

export interface Product {
  uuid: string;
  name: string;
  image: string;
  artistUuid: string;
  artistName: string;
  salePrice: number;
  discountRate: number;
  review: Review;
  badges: Badge[];
  promotion: Promotion;
  isAdBadgeVisible: boolean;
  artistId: number;
}

export interface ProductListResponse {
  items: Product[];
  pagination: Pagination;
}
