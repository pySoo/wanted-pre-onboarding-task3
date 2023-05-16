import { useEffect, useState } from 'react';
import { getSearchList } from '../api/search';

const useSearch = (inputText: string) => {
  const [isSearching, setIsSearching] = useState(false);
  const [page, setPage] = useState(1);

  const [searchData, setSearchData] = useState<SearchDataType | undefined>(
    undefined,
  );

  const fetchSearchList = async () => {
    setIsSearching(true);
    const { data } = await getSearchList(inputText, page);
    console.log('search data', data);
    setIsSearching(false);
    setSearchData(data);
  };

  const clearSearchData = () => {
    setSearchData(undefined);
  };

  useEffect(() => {
    if (inputText === '') {
      setPage(1);
      return;
    }
    if (searchData && searchData.q !== inputText && page !== 1) {
      setPage(1);
    } else {
      fetchSearchList();
    }
  }, [inputText, page]);

  return { isSearching, searchData, setPage, clearSearchData };
};

export default useSearch;
