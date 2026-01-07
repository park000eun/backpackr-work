import Image from 'next/image';
import type { UnitShortcutItem } from '@/src/types';

const ShortcutList = ({ shortcutData }: { shortcutData: UnitShortcutItem[] }) => {
  return (
    <section className="mb-12 border-y-8 border-gray-100 py-6 pl-4 flex flex-col gap-2 items-start">
      <h3 className="w-full font-extrabold text-center text-gray-600">어떤 선물을 하나요?</h3>

      <div
        className="w-full overflow-x-auto scrollbar-hide"
        style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
      >
        <div className="flex gap-1.5 w-max">
          {shortcutData.map((item) => (
            <a key={item.label} href={item.webUrl} className="flex flex-col items-center gap-2 p-1 shrink-0">
              <Image src={item.imageUrl} alt={item.label} width={72} height={72} className="rounded" />
              <span className="text-sm text-gray-600 whitespace-nowrap">{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShortcutList;
