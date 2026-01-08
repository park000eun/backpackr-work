// 40px 만큼 더 미리 감지해서 무한스크롤 데이터 요청 hook
import { useEffect, useRef, useCallback, type RefObject } from 'react';

interface UseInfiniteScrollProps {
  target: RefObject<HTMLDivElement | null>;
  threshold?: number;
  rootMargin?: number;
  onScroll: () => void;
}

const useInfiniteScroll = ({ target, threshold = 0.1, rootMargin = 40, onScroll }: UseInfiniteScrollProps) => {
  // onScroll을 ref로 저장하여 의존성 문제 해결
  const onScrollRef = useRef(onScroll);
  
  useEffect(() => {
    onScrollRef.current = onScroll;
  }, [onScroll]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onScrollRef.current();
        }
      },
      { threshold, rootMargin: `${rootMargin}px` }
    );

    const currentTarget = target.current;
    if (currentTarget) observer.observe(currentTarget);

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
    // target은 ref 객체이므로 의존성에서 제외, rootMargin과 threshold만 포함
  }, [rootMargin, threshold]);
};

export default useInfiniteScroll;
