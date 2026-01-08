import type { Product } from '@/src/types';
import { ProductItem } from '@/src/components';

const ProductList = ({ products }: { products: Product[] }) => {
  return (
    <section className="mb-12 px-4">
      <div className="grid gap-x-3 gap-y-8 grid-cols-2 ">
        {products.map((item: Product, index: number) => {
          return <ProductItem key={`product-${item.uuid}-${index}`} item={item} />;
        })}
      </div>
    </section>
  );
};

export default ProductList;
