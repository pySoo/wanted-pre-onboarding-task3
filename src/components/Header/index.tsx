import styles from './styles.module.scss';

const Header = () => {
  return (
    <header className={styles.headerStyle}>
      <h1 className={styles.titleStyle}>Toodos</h1>
    </header>
  );
};

export default Header;
