'use client';
import { useRef } from 'react';

import { useFetchProductList } from '../store/useFetchProductList';
import useSectionedData, { type DataSection } from '../hooks/useSectionedData';
import useInfiniteScroll from '../hooks/useInfiniteScroll';

import GiftList from '../components/units/gift/GiftList';
import Loading from '../components/Loading';
import ProductList from '../components/product/ProductList';
import ReviewList from '../components/units/review/ReviewList';
import ShortcutList from '../components/units/shortcut/ShortcutList';

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
