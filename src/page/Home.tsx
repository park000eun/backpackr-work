'use client';
import { useRef } from 'react';
import { useFetchProductList } from '../store/useFetchProductList';

import ProductList from '../components/product/ProductList';
import Loading from '../components/Loading';
import useInfiniteScroll from '../hooks/useInfiniteScroll';

const Home = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useFetchProductList();

  const allProducts = data.pages.flatMap((page) => page.items); // page1 ~ 3.json > items flatMap

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
