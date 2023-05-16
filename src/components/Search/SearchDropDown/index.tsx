import { useEffect, useRef, useState } from 'react';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { SearchItem } from '../SearchDropDownItem';
import SearchBottomButton from '../Buttons/SearchBottomButton';
import styles from './styles.module.scss';

type SearchDropDownProps = {
  searchData: SearchDataType;
  isSearching: boolean;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  onCreateTodo: (todoText: string) => void;
};

export function SearchDropDown({
  searchData,
  isSearching,
  setPage,
  onCreateTodo,
}: SearchDropDownProps) {
  const [searchResult, setSearchResult] = useState<string[]>([]);
  const scrollRef = useRef<HTMLUListElement>(null);

  const { q: keyword, result, page, limit, qty, total } = searchData;
  const isMaxData = limit * (page - 1) + qty >= total;

  const handleIntersect: IntersectionObserverCallback = ([
    { isIntersecting },
  ]) => {
    if (isSearching) return;
    if (isIntersecting) setPage((prev) => prev + 1);
  };

  const scrollTarget = useInfiniteScroll(handleIntersect);

  useEffect(() => {
    if (page === 1) {
      if (scrollRef.current) scrollRef.current.scrollTop = 0;
      setSearchResult(result);
    } else {
      setSearchResult((prev) => [...prev, ...result]);
    }
  }, [searchData]);

  return (
    <ul ref={scrollRef} className={styles.dropDownList}>
      {searchResult.map((searchText, index) => (
        <SearchItem
          key={index}
          keyword={keyword}
          searchText={searchText}
          onCreateTodo={onCreateTodo}
        />
      ))}
      {!isMaxData && <SearchBottomButton isSearching={isSearching} />}
      {!isMaxData && <div ref={scrollTarget} />}
    </ul>
  );
}
