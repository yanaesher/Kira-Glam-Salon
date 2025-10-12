import { ReactNode } from "react";

export interface ContactItem {
  icon: ReactNode;
  title: string;
  lines: string[];
}
