// 40px 만큼 더 미리 감지해서 무한스크롤 데이터 요청 hook
import { useEffect, type RefObject } from 'react';

interface UseInfiniteScrollProps {
  target: RefObject<HTMLDivElement | null>;
  threshold?: number;
  rootMargin?: number;
  onScroll: () => void;
}

const useInfiniteScroll = ({ target, threshold = 0.1, rootMargin = 40, onScroll }: UseInfiniteScrollProps) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) onScroll();
      },
      { threshold, rootMargin: `${rootMargin}px` }
    );

    const currentTarget = target.current;
    if (currentTarget) observer.observe(currentTarget);

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [target, onScroll, rootMargin, threshold]);
};

export default useInfiniteScroll;
