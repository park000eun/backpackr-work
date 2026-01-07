import Image from 'next/image';

import type { UnitGift, UnitGiftItem } from '@/src/types';
import { TEXT_STYLES } from '@/src/types';

import HandmadeItem from './HandmadeItem';

const HandmadeList = ({ handmadeData }: { handmadeData: UnitGift }) => {
  const { icon, title, themeTitle, items } = handmadeData;

  return (
    <section className="mb-12 bg-[#EFFBED] py-6 px-4 flex flex-col gap-4 items-start">
      <div>
        <div className="flex gap-1 items-center">
          <Image src={icon} alt={themeTitle} width={24} height={24} />
          {title.map((ele) => (
            <span
              key={ele.text}
              style={{
                fontSize: `${ele.size}px`,
                color: ele.color,
                backgroundColor: ele.bgColorWeb || undefined,
                ...TEXT_STYLES[ele.types[0]],
              }}
            >
              {ele.text}
            </span>
          ))}
        </div>
        <h1 className="text-lg font-extrabold text-gray-600 pl-1">{themeTitle}</h1>
      </div>

      <div className="grid gap-x-3 gap-y-4 grid-cols-3">
        {items.map((item: UnitGiftItem) => (
          <HandmadeItem key={item.name} handmadeItem={item} />
        ))}
      </div>
    </section>
  );
};

export default HandmadeList;
