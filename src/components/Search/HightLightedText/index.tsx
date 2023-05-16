import styles from './styles.module.scss';

type HighLightedTextProps = {
  text: string;
  keyword: string;
};

export default function HighLightedText({
  text,
  keyword,
}: HighLightedTextProps) {
  const regex = new RegExp(`(${keyword})`, 'gi');
  const splittedText = text.split(regex);

  return (
    <span className={styles.textContainer}>
      {splittedText.map((splitted, index) =>
        regex.test(splitted) ? (
          <span key={index} className={styles.highLightText}>
            {splitted}
          </span>
        ) : (
          splitted
        ),
      )}
    </span>
  );
}
