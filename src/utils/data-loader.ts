// JSON 데이터를 타입 안전하게 로드하는 유틸리티 함수 예제
import type { UnitGift, PageData, UnitReview, UnitShortcut } from '@/types';

// 실제 사용 예제:
// import unitGiftData from '@/server/data/unit-gift.json';
// const data: UnitGift = unitGiftData;

export async function loadUnitGift(): Promise<UnitGift> {
  const data = await import('@/server/data/unit-gift.json');
  return data.default;
}

export async function loadPageData(page: 1 | 2 | 3): Promise<PageData> {
  const data = await import(`@/server/data/page${page}.json`);
  return data.default;
}

export async function loadUnitReview(): Promise<UnitReview> {
  const data = await import('@/server/data/unit-review.json');
  return data.default;
}

export async function loadUnitShortcut(): Promise<UnitShortcut> {
  const data = await import('@/server/data/unit-shortcut.json');
  return data.default;
}
