import { Spinner } from '../../../common/Spinner';
import styles from './styles.module.scss';

type SearchBottomButtonProps = {
  isSearching: boolean;
};

function SearchMoreButton() {
  return (
    <svg
      width="12"
      height="4"
      viewBox="0 0 12 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.66675 2C2.66675 1.30964 2.1071 0.75 1.41675 0.75C0.726392 0.75 0.166748 1.30964 0.166748 2C0.166748 2.69036 0.726392 3.25 1.41675 3.25C2.1071 3.25 2.66675 2.69036 2.66675 2ZM7.25008 2C7.25008 1.30964 6.69044 0.75 6.00008 0.75C5.30973 0.75 4.75008 1.30964 4.75008 2C4.75008 2.69036 5.30973 3.25 6.00008 3.25C6.69044 3.25 7.25008 2.69036 7.25008 2ZM10.5834 0.75C11.2738 0.75 11.8334 1.30964 11.8334 2C11.8334 2.69036 11.2738 3.25 10.5834 3.25C9.89306 3.25 9.33342 2.69036 9.33342 2C9.33342 1.30964 9.89306 0.75 10.5834 0.75Z"
        fill="#9F9F9F"
      />
    </svg>
  );
}

export default function SearchBottomButton({
  isSearching,
}: SearchBottomButtonProps) {
  return (
    <div className={styles.searchBottomButton}>
      {isSearching ? <Spinner /> : <SearchMoreButton />}
    </div>
  );
}
