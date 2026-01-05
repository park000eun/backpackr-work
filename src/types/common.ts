export type BadgeDisplayType = 'RECTANGLE' | 'REPURCHASE' | 'NEW';
export type TextType = 'BOLD' | 'ITALIC' | 'UNDERLINE';

export interface UnitTitle {
  text: string;
  types: TextType[];
  size: number;
  color: string;
  colorWeb: string;
  bgColor: string | null;
  bgColorWeb: string | null;
}

export interface Review {
  count: number;
  rate: number;
  rateLabel: string;
  contents: string;
  starFull: boolean;
}

export interface Badge {
  displayType: BadgeDisplayType;
  label: string;
  colorFont: string;
  colorBackground: string;
  image: string | null;
}

export interface PromotionLabel {
  types: TextType[];
  text: string;
  colorFont: string;
  size: number;
}

export interface Promotion {
  colorBackground: string;
  labels: PromotionLabel[];
}

export interface Pagination {
  total: number;
  current: number;
  pageSize: number;
  itemSize: number;
}
