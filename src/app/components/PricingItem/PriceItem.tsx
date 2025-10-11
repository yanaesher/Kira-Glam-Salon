import type { PriceItem } from "./Price";
import styles from "./PriceItem.module.css";

export function PriceItem({ title, description, price }: PriceItem) {
  return (
    <li key={title} className={styles.item}>
      <div className={styles.itemText}>
        <h3 className={styles.itemTitle}>{title}</h3>
        <p className={styles.itemDesc}>{description}</p>
      </div>
      <div className={styles.price}>&#8364;{price}</div>
    </li>
  );
}
