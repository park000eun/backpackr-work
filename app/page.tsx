import Image from 'next/image';
import page1Data from '../src/server/data/page1.json';
import page2Data from '../src/server/data/page2.json';
import page3Data from '../src/server/data/page3.json';
import ProductThumbImage from '@/src/components/common/ProductThumbImage';
import { BADGE_DISPLAY_TYPES, PageItem, UnitGift, UnitGiftItem, UnitShortcutItem } from '@/src/types';

import ProductInfo from '@/src/components/common/ProductInfo';
import ShortcutList from '@/src/components/units/shortcut/ShortcutList';
import GiftList from '@/src/components/units/gift/GiftList';
import ReviewList from '@/src/components/units/review/ReviewList';

const Home = () => {
  // 각 데이터의 items 배열에서 처음 2개만 가져오기
  const page1Items = page1Data.items.slice(0, 2) as PageItem[];

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans py-4">
      <main className="container mx-auto">
        <section className="mb-12 px-4">
          <div className="grid  gap-2 grid-cols-2">
            {page1Items.map((item: PageItem) => {
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
        {/* <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-black dark:text-zinc-50">
            {unitReviewData.title.map((span, idx) => (
              <span
                key={idx}
                style={{
                  fontSize: `${span.size}px`,
                  color: span.color,
                  fontWeight: span.types.includes('BOLD') ? 'bold' : 'normal',
                }}
              >
                {span.text}
              </span>
            ))}
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {unitReviewProducts.map((product) => (
              <div key={product.uuid} className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                <Image
                  src={product.image}
                  alt={product.productName}
                  width={200}
                  height={200}
                  className="mb-2 rounded"
                />
                <h3 className="mb-1 font-semibold text-black dark:text-zinc-50">{product.productName}</h3>
                <p className="mb-1 text-sm text-gray-600 dark:text-gray-400">{product.artistName}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  평점: {product.reviewRate} ({product.reviewCount}개 리뷰)
                </p>
              </div>
            ))}
          </div>
        </section>
    */}
      </main>
    </div>
  );
};

export default Home;
