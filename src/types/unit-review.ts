import { UnitTitle } from './common';

export interface ReviewInfo {
  text: string;
  types: string[];
  size: number;
  color: string;
  colorWeb: string;
  bgColor: string | null;
  bgColorWeb: string | null;
}

export interface UnitReviewProduct {
  uuid: string;
  image: string;
  productName: string;
  artistName: string;
  saleRate: number;
  price: number;
  reviewInfo: ReviewInfo[];
  reviewRate: number;
  reviewCount: number;
}

export interface UnitReview {
  title: UnitTitle[];
  products: UnitReviewProduct[];
}
