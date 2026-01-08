'use client';
import { useRef, useCallback } from 'react';
import { useFetchProductList } from '../store/useFetchProductList';

import ProductList from '../components/product/ProductList';
import Loading from '../components/Loading';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import ShortcutList from '../components/units/shortcut/ShortcutList';
import GiftList from '../components/units/gift/GiftList';
import ReviewList from '../components/units/review/ReviewList';

const Home = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useFetchProductList();

  const allProducts = data.pages.flatMap((page) => page.items); // page1 ~ 3.json > items flatMap

  const handleScroll = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  useInfiniteScroll({
    target: targetRef,
    onScroll: handleScroll,
  });

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans py-4">
      <main className="container mx-auto">
        <ShortcutList />
        <GiftList />
        <ReviewList />
        <ProductList products={allProducts} />

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
