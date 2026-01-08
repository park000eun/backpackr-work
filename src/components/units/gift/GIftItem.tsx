'use client';
import Image from 'next/image';

import type { UnitGiftItem } from '@/src/types';
import { Price } from '@/src/components';

const GiftItem = ({ handmadeItem }: { handmadeItem: UnitGiftItem }) => {
  const { thumbImageUrl, name, saleRate, priceSale } = handmadeItem;
  return (
    <button onClick={() => alert(`작품 상세 페이지로 이동 - ${name}`)}>
      <Image
        src={thumbImageUrl}
        alt={name}
        width={72}
        height={72}
        className="rounded-2xl w-full aspect-square object-cover"
      />
      <span className="text-sm text-gray-600 line-clamp-2 mt-2 text-start">{name}</span>
      <Price discountRate={saleRate} salePrice={priceSale} />
    </button>
  );
};

export default GiftItem;
