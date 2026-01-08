import { useMemo } from 'react';
import type { Product } from '../types';

export interface DataSection {
  products: Product[];
  showComponent?: 'gift' | 'review' | 'shortcut';
}

const useSectionedData = (allProducts: Product[]): DataSection[] => {
  const ITEMS_PER_2_ROWS = 4; // 모바일 환경 기준으로 지정(grid-cols-2 > 2줄 = 4개)

  return useMemo(() => {
    const sections: DataSection[] = [];

    // 1~2번째 줄 이후 ShortcutList
    if (allProducts.length > 0) {
      sections.push({
        products: allProducts.slice(0, ITEMS_PER_2_ROWS),
        showComponent: 'shortcut',
      });
    }

    // 3-4번째 줄 이후 GiftList
    if (allProducts.length > ITEMS_PER_2_ROWS) {
      sections.push({
        products: allProducts.slice(ITEMS_PER_2_ROWS, ITEMS_PER_2_ROWS * 2),
        showComponent: 'gift',
      });
    }

    // 5-6번째 줄 이후 ReviewList
    if (allProducts.length > ITEMS_PER_2_ROWS * 2) {
      sections.push({
        products: allProducts.slice(ITEMS_PER_2_ROWS * 2, ITEMS_PER_2_ROWS * 3),
        showComponent: 'review',
      });
    }

    // 이후 기본 ProductList 나머지 상품들
    if (allProducts.length > ITEMS_PER_2_ROWS * 3) {
      sections.push({
        products: allProducts.slice(ITEMS_PER_2_ROWS * 3),
      });
    }

    return sections;
  }, [allProducts]);
};

export default useSectionedData;
