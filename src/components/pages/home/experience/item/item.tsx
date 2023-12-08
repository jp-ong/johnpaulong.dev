import styles from "./item.module.scss";

interface Props {
  date: string;
  title: string;
  subtitle: string;
  body: string;
}

export const ExperienceItem = ({ date, title, subtitle, body }: Props) => {
  return (
    <li className={styles.item}>
      <div className={styles.decoration}>
        <div className={styles.dot}></div>
        <div className={styles.line}></div>
      </div>
      <div className={styles.content}>
        <div className={styles.date}>{date}</div>
        <div className={styles.header}>
          <h3>{title}</h3>
          <span>{subtitle}</span>
        </div>
        <p>{body}</p>
      </div>
    </li>
  );
};
