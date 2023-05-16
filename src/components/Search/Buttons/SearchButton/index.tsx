import styles from './styles.module.scss';

export default function SearchButton() {
  return (
    <div className={styles.searchButton}>
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.1667 6.58333C11.1667 9.11463 9.11468 11.1667 6.58337 11.1667C4.05207 11.1667 2.00004 9.11463 2.00004 6.58333C2.00004 4.05202 4.05207 1.99999 6.58337 1.99999C9.11468 1.99999 11.1667 4.05202 11.1667 6.58333ZM10.3743 11.5528C9.32281 12.3561 8.00882 12.8333 6.58337 12.8333C3.13159 12.8333 0.333374 10.0351 0.333374 6.58333C0.333374 3.13155 3.13159 0.333328 6.58337 0.333328C10.0352 0.333328 12.8334 3.13155 12.8334 6.58333C12.8334 8.00878 12.3562 9.32276 11.5528 10.3743L14.2141 13.0355C14.5395 13.361 14.5395 13.8886 14.2141 14.214C13.8886 14.5395 13.361 14.5395 13.0356 14.214L10.3743 11.5528Z"
          fill="#7D7D7D"
        />
      </svg>
    </div>
  );
}
