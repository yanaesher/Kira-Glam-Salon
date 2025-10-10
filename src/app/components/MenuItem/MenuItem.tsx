import styles from "./menuItem.module.css";
import { MENU_ITEMS } from "./menu-items";

export function MenuItem() {
  return (
    <ul className={styles.menu}>
      {MENU_ITEMS.map((menuItem, index) => (
        <li key={index}>
          <a href={`#${menuItem.id}`}>{menuItem.label}</a>
        </li>
      ))}
    </ul>
  );
}
