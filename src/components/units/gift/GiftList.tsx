import Image from 'next/image';

import handmadeData from '@/src/server/data/unit-gift.json';
import type { UnitGiftItem, UnitGift } from '@/src/types';
import { GiftItem, SectionTitle, StyledText } from '@/src/components';

const GiftList = () => {
  const { icon, title, themeTitle, items } = handmadeData as UnitGift;

  return (
    <section className="mb-12 bg-[#EFFBED] py-6 px-4 flex flex-col gap-4 items-start">
      <div>
        <div className="flex gap-1 items-center">
          <Image src={icon} alt={themeTitle} width={24} height={24} />
          {title.map((textData) => (
            <StyledText key={textData.text} textData={textData} />
          ))}
        </div>

        <SectionTitle title={themeTitle} />
      </div>

      <div className="grid gap-x-3 gap-y-4 grid-cols-3">
        {items.map((item: UnitGiftItem) => (
          <GiftItem key={item.name} handmadeItem={item} />
        ))}
      </div>
    </section>
  );
};

export default GiftList;
