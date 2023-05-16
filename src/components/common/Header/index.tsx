import styles from './styles.module.scss';

export default function Header() {
  return (
    <header className={styles.headerStyle}>
      <h1 className={styles.titleStyle}>Toodos</h1>
    </header>
  );
}
