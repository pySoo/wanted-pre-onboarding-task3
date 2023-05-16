import HightLightedText from '../HightLightedText';
import styles from './styles.module.scss';

type SearchItemProps = {
  keyword: string;
  searchText: string;
  onCreateTodo: (todoText: string) => void;
};

export function SearchItem({
  keyword,
  searchText,
  onCreateTodo,
}: SearchItemProps) {
  const handleClick = () => {
    onCreateTodo(searchText);
  };

  return (
    <button type="button" className={styles.searchItem} onClick={handleClick}>
      <HightLightedText text={searchText} keyword={keyword} />
    </button>
  );
}
