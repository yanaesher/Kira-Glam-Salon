export const MENU_ITEMS = [
  { label: "Our Works", id: "works" },
  { label: "About", id: "about" },
  { label: "Prices", id: "prices" },
  { label: "Reviews", id: "reviews" },
  { label: "Contacts", id: "contacts" },
] as const;

export type MenuItem = (typeof MENU_ITEMS)[number];
