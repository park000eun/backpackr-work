import unitGiftData from '../src/server/data/unit-gift.json';
import unitReviewData from '../src/server/data/unit-review.json';
import unitShortcutData from '../src/server/data/unit-shortcut.json';
import page1Data from '../src/server/data/page1.json';
import ProductThumbImage from '@/src/components/common/ProductThumbImage';
import { BADGE_DISPLAY_TYPES, PageItem, TEXT_STYLES, TextStyleType, UnitGiftItem, UnitShortcutItem } from '@/src/types';

import ProductInfo from '@/src/components/common/ProductInfo';
import ShortcutList from '@/src/components/shortcutList/ShortcutList';

const Home = () => {
  const shortcutData = unitShortcutData.items as UnitShortcutItem[];
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

        {/* 어떤 선물을 하나요? */}
        <ShortcutList shortcutData={shortcutData} />
      </main>
    </div>
  );
};

export default Home;
