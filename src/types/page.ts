import { Review, Badge, Promotion, Pagination } from './common';

export interface PageItem {
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

export interface PageData {
  items: PageItem[];
  pagination: Pagination;
}
