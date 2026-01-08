import Image from 'next/image';
import type { UnitShortcutItem } from '@/src/types';

const ShortcutItem = ({ shortcutItem }: { shortcutItem: UnitShortcutItem }) => {
  const { label, imageUrl } = shortcutItem;
  return (
    <button onClick={() => alert('숏컷 상세 페이지로 이동')} className="flex flex-col items-center gap-2 p-1 shrink-0">
      <Image src={imageUrl} alt={label} width={72} height={72} className="rounded" />
      <span className="text-sm text-gray-600 whitespace-nowrap">{label}</span>
    </button>
  );
};

export default ShortcutItem;
