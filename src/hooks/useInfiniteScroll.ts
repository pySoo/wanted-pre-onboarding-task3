import { useEffect, useRef } from 'react';

export default function useInfiniteScroll(
  onIntersect: IntersectionObserverCallback,
) {
  const scrollTarget = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!scrollTarget.current) return;

    const observer: IntersectionObserver = new IntersectionObserver(
      onIntersect,
      {
        root: null,
        rootMargin: '0px',
        threshold: 1.0,
      },
    );
    observer.observe(scrollTarget.current);

    return () => observer?.disconnect();
  }, [onIntersect, scrollTarget]);

  return scrollTarget;
}
