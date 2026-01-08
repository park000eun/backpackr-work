import type { Product } from '@/src/types';
import ProductInfo from '../common/ProductInfo';
import ProductThumbImage from '../common/ProductThumbImage';

const ProductItem = ({ item }: { item: Product }) => {
  return (
    <div key={item.uuid}>
      <ProductThumbImage
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
