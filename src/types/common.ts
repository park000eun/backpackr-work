export const TEXT_STYLES = {
  BOLD: { fontWeight: 'bold' },
} as const;
export type TextStyleType = keyof typeof TEXT_STYLES;

export const BADGE_DISPLAY_TYPES = {
  RECTANGLE: { fontWeight: 'normal' },
  REPURCHASE: { fontWeight: 'normal' },
} as const;
export type BadgeDisplayType = keyof typeof BADGE_DISPLAY_TYPES;

export interface UnitTitle {
  text: string;
  types: TextStyleType[];
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
  types: TextStyleType[];
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
