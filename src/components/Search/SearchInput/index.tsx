import styles from './styles.module.scss';

type SearchInputProps = {
  inputText: string;
  isDataLoading: boolean;
  handleInputChange: (event: React.FormEvent<HTMLInputElement>) => void;
};

export default function SearchInput({
  inputText,
  isDataLoading,
  handleInputChange,
}: SearchInputProps) {
  return (
    <input
      className={styles.searchInput}
      placeholder="Add new todo..."
      value={inputText}
      onChange={handleInputChange}
      disabled={isDataLoading}
    />
  );
}
