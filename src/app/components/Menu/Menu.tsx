import styles from "./menu.module.css";
import { MENU_ITEMS, type MenuItem } from "./menu-items";

export function Menu() {
  return (
    <ul className={styles.menu}>
      {MENU_ITEMS.map((menuItem: MenuItem, index) => (
        <li key={index}>
          <a href={`#${menuItem}`}>{menuItem}</a>
        </li>
      ))}
    </ul>
  );
}
