'use client';
import { useRef } from 'react';
import type { Product } from '../types';
import { useFetchProductList } from '../hooks/useFetchProductList';

import ProductThumbImage from '../components/common/ProductThumbImage';
import ProductInfo from '../components/common/ProductInfo';
import ShortcutList from '../components/units/shortcut/ShortcutList';
import GiftList from '../components/units/gift/GiftList';
import ReviewList from '../components/units/review/ReviewList';

const Home = () => {
  const { data } = useFetchProductList();

  //   page1 ~ 3.json의 items를 하나의 배열로 합침.
  const allProducts = data?.pages.flatMap((page) => page.items) ?? [];

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans py-4">
      <main className="container mx-auto">
        <section className="mb-12 px-4">
          <div className="grid  gap-2 grid-cols-2">
            {allProducts.map((item: Product) => {
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
            })}
          </div>
        </section>

        <ShortcutList />
        <GiftList />
        <ReviewList />
      </main>
    </div>
  );
};

export default Home;
