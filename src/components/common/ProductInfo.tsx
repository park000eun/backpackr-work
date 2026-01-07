import type { Badge as BadgeType, Review } from '@/src/types';
import Image from 'next/image';
import Badge from '@/src/components/common/Badge';
import Price from '@/src/components/common/Price';
import Rating from '@/src/components/common/Rating';
import adIcon from '@/src/assets/icon/ad.png';

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
      <div className="flex justify-between items-center">
        <span className="text-xs text-gray-400 truncate flex-1">{artistName}</span>
        {isAdBadge && <Image src={adIcon} alt="AD" width={16} height={16} />}
      </div>

      <h3 className="line-clamp-2">{name}</h3>

      <Price discountRate={discountRate} salePrice={salePrice} />

      {badges.length > 0 && (
        <div className="flex flex-wrap gap-1 ">
          {badges.map((badge) => (
            <Badge
              key={badge.label}
              label={badge.label}
              style={{
                color: badge.colorFont,
                backgroundColor: badge.colorBackground,
              }}
            />
          ))}
        </div>
      )}

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
