export const MENU_ITEMS = [
  "Our Works",
  "About",
  "Prices",
  "Reviews",
  "Contacts",
] as const;

export type MenuItem = (typeof MENU_ITEMS)[number];
