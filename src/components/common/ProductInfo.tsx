import Image from 'next/image';

import type { Badge as BadgeType, Review } from '@/src/types';
import { AdIcon } from '@/src/assets';
import { ArtistName, Badge, Price, ProductName, Rating } from '@/src/components';

interface ProductInfoProps {
  isAdBadge: boolean;
  name: string;
  badges: BadgeType[];
  artistName: string;
  salePrice: number;
  discountRate: number;
  review: Review;
}

const ProductInfo = ({ isAdBadge, name, badges, artistName, salePrice, discountRate, review }: ProductInfoProps) => {
  return (
    <div className="flex flex-col gap-1 px-1 pt-3">
      {/* 작가명, 광고 뱃지 */}
      <div className="flex justify-between items-center">
        <ArtistName artistName={artistName} />
        {isAdBadge && <Image src={AdIcon} alt="AD" width={16} height={16} />}
      </div>

      {/* 제품명, 가격 */}
      <ProductName name={name} />
      <Price discountRate={discountRate} salePrice={salePrice} />

      {/* 프로모션 뱃지 */}
      {badges.length > 0 && (
        <div className="flex flex-wrap gap-1 ">
          {badges.map((badge) => (
            <Badge
              key={badge.label}
              label={badge.label}
              image={badge.image}
              style={{
                color: badge.colorFont,
                backgroundColor: badge.colorBackground,
              }}
            />
          ))}
        </div>
      )}

      {/* 후기 */}
      <div>
        <Rating rate={review.rate} count={review.count} />
        <div className="mt-1 flex items-center gap-1">
          <Badge label="후기" variant="review" />
          <span className="text-xs line-clamp-1 text-gray-600">{review.contents}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
