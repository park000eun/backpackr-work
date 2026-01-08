import { TEXT_STYLES, type Promotion } from '@/src/types';
import Image from 'next/image';
import likeIcon from '@/src/assets/icon/favorite-off.png';
import Badge from './Badge';

interface ProductThumbImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  promotion: Promotion;
  like?: boolean;
}

const ProductThumbImage = ({ src, alt, width = 200, height = 200, promotion, like = true }: ProductThumbImageProps) => {
  const promotionBadge = promotion.labels[0];

  return (
    <div className="relative w-full">
      {like && (
        <button className="absolute top-2 right-2">
          <Image src={likeIcon} alt="favorite-off" width={26} height={26} />
        </button>
      )}

      {promotionBadge && (
        <div className="absolute bottom-0 left-0  ">
          <Badge
            variant="promotion"
            label={promotionBadge.text}
            style={{
              backgroundColor: promotion.colorBackground,
              color: promotionBadge.colorFont,
              fontSize: `${promotionBadge.size}px`,
              ...TEXT_STYLES[promotionBadge.types[0]],
            }}
          />
        </div>
      )}

      <Image src={src} alt={alt} width={width} height={height} className="rounded w-full aspect-square object-cover" />
    </div>
  );
};

export default ProductThumbImage;
