"use client";

import styles from "./Footer.module.css";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <p className={styles.slogan}>Nail care you deserve.</p>

          <div className={styles.socials}>
            <a href="#" aria-label="Instagram" className={styles.icon}>
              <Instagram size={18} />
            </a>
          </div>
        </div>

        <hr className={styles.line} />

        <nav className={styles.nav}>
          <a href="#works" className={styles.link}>
            Our Works
          </a>
          <a href="#about" className={styles.link}>
            About
          </a>
          <a href="#prices" className={styles.link}>
            Prices
          </a>
          <a href="#reviews" className={styles.link}>
            Reviews
          </a>
          <a href="#contacts" className={styles.link}>
            Contacts
          </a>
        </nav>
      </div>
    </footer>
  );
}
