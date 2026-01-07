import shortcutData from '@/src/server/data/unit-shortcut.json';
import type { UnitShortcutItem } from '@/src/types';
import ShortcutItem from './ShortcutItem';

const ShortcutList = () => {
  return (
    <section className="mb-12 border-y-8 border-gray-100 py-6 pl-4 flex flex-col gap-3 items-start">
      <h1 className="text-lg w-full font-extrabold text-center text-gray-600">{shortcutData.title}</h1>

      <div
        className="w-full overflow-x-auto scrollbar-hide"
        style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
      >
        <div className="flex gap-1.5 w-max">
          {shortcutData.items.map((item: UnitShortcutItem) => (
            <ShortcutItem key={item.label} shortcutItem={item as UnitShortcutItem} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShortcutList;
