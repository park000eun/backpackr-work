'use client';
import Image from 'next/image';

import { TEXT_STYLES, type TextStyleType, type UnitReviewProduct } from '@/src/types';
import Price from '../../common/Price';
import ArtistName from '../../common/Text/ArtistName';
import Rating from '../../common/Rating';

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
          <img
            src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none'%3E%3Cpath fill='%23999' d='M11.15 4 10 6q.825 0 1.412.588Q12 7.175 12 8t-.588 1.412A1.93 1.93 0 0 1 10 10q-.825 0-1.412-.588A1.93 1.93 0 0 1 8 8q0-.288.069-.531T8.275 7L10 4zm-5 0L5 6q.824 0 1.412.588Q7 7.175 7 8t-.588 1.412A1.93 1.93 0 0 1 5 10q-.824 0-1.412-.588A1.93 1.93 0 0 1 3 8q0-.288.069-.531.068-.244.206-.469L5 4z'/%3E%3C/svg%3E"
            alt="quote"
            width={16}
            height={8}
            className="float-left mr-0.5 mt-0.5"
          />
          <div className="text-start">
            {reviewInfo.map((info, idx) => (
              <span
                key={idx}
                className="text-xs text-gray-600 inline"
                style={{
                  fontSize: `${info.size}px`,
                  color: info.colorWeb,
                  backgroundColor: info.bgColorWeb || undefined,
                  ...TEXT_STYLES[info.types[0] as TextStyleType],
                }}
              >
                {info.text}
              </span>
            ))}
          </div>
        </div>

        <Rating rate={reviewRate} count={reviewCount} />
      </div>
    </button>
  );
};

export default ReviewItem;
