'use client';
import Image from 'next/image';

import type { UnitReviewProduct } from '@/src/types';
import { ArtistName, Price, Rating, StyledText } from '@/src/components';
import { LeftQuoteIcon } from '@/src/assets';

const ReviewItem = ({ reviewItem }: { reviewItem: UnitReviewProduct }) => {
  const { artistName, productName, image, saleRate, price, reviewInfo, reviewRate, reviewCount } = reviewItem;
  return (
    <button
      onClick={() => alert(`작품 상세 페이지로 이동 - ${productName}`)}
      className="flex flex-col p-3 gap-3 max-w-72 bg-white border border-[#e4e9fd] rounded-sm"
    >
      <div className="flex gap-1 flex-1 items-center">
        <Image
          src={image}
          alt={productName}
          width={112}
          height={112}
          className="rounded-xs aspect-square object-cover"
        />
        <div className="flex flex-col  flex-1 justify-center ml-1.5">
          <ArtistName artistName={artistName} />
          <span className="text-sm text-gray-600 line-clamp-2 my-1 text-start">{productName}</span>
          <Price discountRate={saleRate} salePrice={price} />
        </div>
      </div>

      <div className="bg-gray-100 rounded-sm flex-1 p-2 max-h-26 flex flex-col gap-1">
        <div className="relative line-clamp-3 text-start leading-[1.2]  ">
          <LeftQuoteIcon className="float-left mr-0.5 mt-0.5" />
          <div className="text-start">
            {reviewInfo.map((info) => (
              <StyledText key={info.text} textData={info} className="text-xs text-gray-600 inline" />
            ))}
          </div>
        </div>

        <Rating rate={reviewRate} count={reviewCount} />
      </div>
    </button>
  );
};

export default ReviewItem;
