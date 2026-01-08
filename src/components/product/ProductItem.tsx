import type { Product } from '@/src/types';
import { ProductInfo, ProductThumbImage } from '@/src/components';

const ProductItem = ({ item }: { item: Product }) => {
  return (
    <div key={item.uuid} onClick={() => alert(`작품 상세 페이지로 이동 - ${item.name}`)}>
      <ProductThumbImage
        uuid={item.uuid}
        src={item.image}
        alt={`${item.name} thumbnail`}
        promotion={item.promotion}
        width={200}
        height={200}
      />

      <ProductInfo
        isAdBadge={item.isAdBadgeVisible}
        name={item.name}
        badges={item.badges}
        artistName={item.artistName}
        salePrice={item.salePrice}
        discountRate={item.discountRate}
        review={item.review}
      />
    </div>
  );
};

export default ProductItem;
