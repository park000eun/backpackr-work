import type { UnitShortcutItem } from '@/src/types';
import ShortcutItem from './ShortcutItem';

const ShortcutList = ({ shortcutData }: { shortcutData: UnitShortcutItem[] }) => {
  return (
    <section className="mb-12 border-y-8 border-gray-100 py-6 pl-4 flex flex-col gap-2 items-start">
      <h1 className="text-lg w-full font-extrabold text-center text-gray-600">어떤 선물을 하나요?</h1>

      <div
        className="w-full overflow-x-auto scrollbar-hide"
        style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
      >
        <div className="flex gap-1.5 w-max">
          {shortcutData.map((item) => (
            <ShortcutItem key={item.label} shortcutItem={item as UnitShortcutItem} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShortcutList;
