import { FaPlusCircle } from 'react-icons/fa';
import styles from './styles.module.scss';

export default function SearchPlusButton() {
  return (
    <button className={styles.inputSubmit} type="submit">
      <FaPlusCircle className={styles.plusButton} />
    </button>
  );
}
