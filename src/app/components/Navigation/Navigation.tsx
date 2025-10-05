import Link from "next/link";
import Image from "next/image";
import styles from "./navigation.module.css";
import { Menu } from "../Menu/Menu";
import { Instagram } from "lucide-react";

export function Navigation() {
  return (
    <nav className={`container ${styles.nav}`}>
      <Link href="/" className={styles.logo} aria-label="Kira Glam Salon Home">
        <Image
          src="/logo.png"
          alt="Kira Glam Salon logo"
          width={120}
          height={35}
          priority
        />
      </Link>
      <Menu />
      <a
        href="https://www.treatwell.com/your-salon-page"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.book_btn}
      >
        Book Now
      </a>

      {/* Socials */}
      <div className={styles.socials}>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram Kira Glam Salon"
          className={styles.social_icon}
        >
          <Instagram size={20} color="#e6d4d1" />
        </a>
      </div>
    </nav>
  );
}
