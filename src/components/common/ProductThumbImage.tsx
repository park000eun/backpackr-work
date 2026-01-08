import Image from 'next/image';

import { TEXT_STYLES, type Promotion } from '@/src/types';
import { Badge } from '@/src/components';
// import FavoriteToggle from './FavoriteToggle';

interface ProductThumbImageProps {
  src: string;
  alt: string;
  uuid: string;
  width?: number;
  height?: number;
  promotion: Promotion;
}

const ProductThumbImage = ({
  src,
  alt,
  // uuid,
  width = 200,
  height = 200,
  promotion,
}: ProductThumbImageProps) => {
  const promotionBadge = promotion.labels[0];

  return (
    <div className="relative w-full">
      {/* <FavoriteToggle uuid={uuid} /> */}

      {promotionBadge && (
        <div className="absolute bottom-0 left-0">
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
