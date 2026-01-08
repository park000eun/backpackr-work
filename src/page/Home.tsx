'use client';
import { useRef } from 'react';
import { useFetchProductList } from '@/src/store';
import { useInfiniteScroll, useSectionedData } from '@/src/hooks';

import { ProductList, GiftList, ReviewList, ShortcutList, Loading } from '@/src/components';

type DataSection = ReturnType<typeof useSectionedData>[number];

const Home = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useFetchProductList();

  const allProducts = data.pages.flatMap((page) => page.items); // page1 ~ 3.json > items flatMap
  const productSections = useSectionedData(allProducts);

  useInfiniteScroll({
    target: targetRef,
    onScroll: () => {
      if (hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    },
  });

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans py-4">
      <main className="container mx-auto">
        {productSections.map((section: DataSection, index: number) => (
          <div key={index}>
            <ProductList products={section.products} />
            {section.showComponent === 'gift' && <GiftList />}
            {section.showComponent === 'review' && <ReviewList />}
            {section.showComponent === 'shortcut' && <ShortcutList />}
          </div>
        ))}

        {hasNextPage && (
          <div ref={targetRef} className="flex justify-center">
            {isFetchingNextPage && <Loading />}
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
