export const MENU_ITEMS = [
  "Services",
  "About",
  "Manicure",
  "Reviews",
  "Contacts",
] as const;

export type MenuItem = (typeof MENU_ITEMS)[number];
