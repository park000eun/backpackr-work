import type { TextObject } from './common';

export interface UnitReviewProduct {
  uuid: string;
  image: string;
  productName: string;
  artistName: string;
  saleRate: number;
  price: number;
  reviewInfo: TextObject[];
  reviewRate: number;
  reviewCount: number;
}

export interface UnitReview {
  title: TextObject[];
  products: UnitReviewProduct[];
}
