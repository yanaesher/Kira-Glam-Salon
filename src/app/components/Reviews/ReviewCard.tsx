import styles from "./reviews.module.css";
import { Review } from "./types";

interface Props {
  review: Review;
}

export default function ReviewCard({ review }: Props) {
  const { name, nailMaster, text, date } = review;

  return (
    <div className={styles.card}>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.master}>Nail master: {nailMaster}</p>
      <p className={styles.text}>{text}</p>
      <p className={styles.date}>{date}</p>
    </div>
  );
}
