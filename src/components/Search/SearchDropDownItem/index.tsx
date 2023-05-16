import HightLightedText from '../HightLightedText';
import styles from './styles.module.scss';

type SearchDropDownItemProps = {
  keyword: string;
  searchText: string;
  onCreateTodo: (todoText: string) => void;
};

export function SearchDropDownItem({
  keyword,
  searchText,
  onCreateTodo,
}: SearchDropDownItemProps) {
  const handleClick = () => {
    onCreateTodo(searchText);
  };

  return (
    <button type="button" className={styles.searchItem} onClick={handleClick}>
      <HightLightedText text={searchText} keyword={keyword} />
    </button>
  );
}
