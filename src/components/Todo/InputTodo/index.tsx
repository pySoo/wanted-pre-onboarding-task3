import { useState } from 'react';
import useDebounce from '@/hooks/useDebounce';
import useSearch from '@/hooks/useSearch';
import { SearchDropDown } from '@/components/Search/SearchDropDown';
import { createTodo } from '@/api/todo';
import SearchButton from '@/components/Search/Buttons/SearchButton';
import SearchInput from '@/components/Search/SearchInput';
import { Spinner } from '@/components/common/Spinner';
import SearchPlusButton from '@/components/Search/Buttons/SearchPlusButton';
import styles from './styles.module.scss';

type InputTodoProps = {
  setTodos: React.Dispatch<React.SetStateAction<TodoItemType[]>>;
};

export default function InputTodo({ setTodos }: InputTodoProps) {
  const [inputText, setInputText] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isDataLoading, setIsDataLoading] = useState(false);

  const debouncedInputText = useDebounce(inputText);
  const { isSearching, searchData, setPage, clearSearchData } =
    useSearch(debouncedInputText);

  const handleCreateTodo = async (todoText: string) => {
    try {
      setIsInputFocused(true);
      setIsDataLoading(true);
      const trimmed = todoText.trim();
      if (!trimmed) {
        return alert('Please write something');
      }

      const newItem = { title: trimmed };
      const { data } = await createTodo(newItem);

      if (data) {
        return setTodos((prev: TodoItemType[]) => [...prev, data]);
      }
    } catch (error) {
      console.error(error);
      alert('Something went wrong.');
    } finally {
      setInputText('');
      setIsDataLoading(false);
      setIsInputFocused(false);
      clearSearchData();
    }
  };

  const handleFocused = () => {
    setIsInputFocused((prev) => !prev);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleCreateTodo(inputText);
  };

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    setInputText(event.currentTarget.value);
  };

  return (
    <form className={styles.inputTodoContainer} onSubmit={handleSubmit}>
      <div
        onFocus={handleFocused}
        onBlur={handleFocused}
        className={isInputFocused ? styles.focusedInputTodo : styles.inputTodo}
      >
        <SearchButton />
        <SearchInput
          inputText={inputText}
          handleInputChange={handleInputChange}
          isDataLoading={isDataLoading}
        />
        {searchData && searchData.result.length !== 0 && (
          <SearchDropDown
            setPage={setPage}
            searchData={searchData}
            isSearching={isSearching}
            onCreateTodo={handleCreateTodo}
          />
        )}
        {isSearching || isDataLoading ? <Spinner /> : <SearchPlusButton />}
      </div>
    </form>
  );
}
