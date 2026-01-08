/**
 * 상품 목록 섹션 노출 설정
 * 비즈니스 요청에 따라 노출 위치와 순서를 쉽게 변경할 수 있습니다.
 *
 * @property afterRow - 몇 번째 줄 이후에 노출할지 (1줄 = 2개 아이템, grid-cols-2 기준)
 * @property component - 노출할 컴포넌트 타입
 *
 * @example
 * // 현재 설정: 1-2번째 줄 후 GiftList, 3-4번째 줄 후 ReviewList, 5번째 줄 후 ShortcutList
 * [
 *   { afterRow: 2, component: 'gift' },
 *   { afterRow: 4, component: 'review' },
 *   { afterRow: 5, component: 'shortcut' },
 * ]
 *
 * // 순서 변경 예시: ReviewList를 먼저 노출하고 싶다면
 * [
 *   { afterRow: 2, component: 'review' },
 *   { afterRow: 4, component: 'gift' },
 *   { afterRow: 5, component: 'shortcut' },
 * ]
 */
export interface SectionConfig {
  afterRow: number;
  component: 'gift' | 'review' | 'shortcut';
}

/**
 * 섹션 노출 설정
 * 순서대로 처리되며, afterRow 값에 따라 해당 줄 이후에 컴포넌트가 노출됩니다.
 *
 * 노출 위치 변경 방법:
 * 1. 순서 변경: 배열의 순서를 변경하면 노출 순서가 바뀝니다.
 * 2. 위치 변경: afterRow 값을 변경하면 노출 위치가 바뀝니다.
 * 3. 컴포넌트 변경: component 값을 변경하면 다른 컴포넌트가 노출됩니다.
 *
 * 예시:
 * - afterRow: 2 → 1-2번째 줄 상품(4개) 표시 후 컴포넌트 노출
 * - afterRow: 4 → 3-4번째 줄 상품(4개) 표시 후 컴포넌트 노출
 * - afterRow: 5 → 5번째 줄 이후 상품 표시 후 컴포넌트 노출
 */
export const SECTION_CONFIG: SectionConfig[] = [
  { afterRow: 2, component: 'gift' },
  { afterRow: 4, component: 'review' },
  { afterRow: 5, component: 'shortcut' },
];

/**
 * 모바일 환경 기준 아이템 수 (grid-cols-2 기준 2줄 = 4개)
 */
export const ITEMS_PER_2_ROWS = 4;
