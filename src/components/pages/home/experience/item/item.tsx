import styles from "./item.module.scss";

export interface Props {
  date: string;
  header: string;
  subheader: string;
  body: string;
}

export const ExperienceItem = ({ date, header, subheader, body }: Props) => {
  return (
    <li className={styles.item}>
      <div className={styles.decoration}>
        <div className={styles.dot}></div>
        <div className={styles.line}></div>
      </div>
      <div className={styles.content}>
        <div className={styles.date}>{date}</div>
        <div className={styles.header}>
          <h3>{header}</h3>
          <small>{subheader}</small>
        </div>
        <p>{body}</p>
      </div>
    </li>
  );
};
