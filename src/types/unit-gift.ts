import type { TextObject } from './common';

export interface UnitGiftItem {
  uuid: string;
  name: string;
  artistId: number;
  artistUuid: string;
  saleRate: number;
  priceSale: number;
  thumbImageUrl: string;
}

export interface UnitGift {
  id: string;
  icon: string;
  targetId: string;
  title: TextObject[];
  themeTitle: string;
  items: UnitGiftItem[];
}
