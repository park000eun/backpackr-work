import type { Product } from './page';

export interface UnitShortcutItem {
  id: number;
  imageUrl: string;
  label: string;
  webUrl: string;
}

export interface UnitShortcut {
  title: string;
  items: Product[];
}
