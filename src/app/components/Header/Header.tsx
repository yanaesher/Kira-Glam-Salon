"use client";

import Image from "next/image";
import styles from "./header.module.css";
import { Navigation } from "../Navigation/Navigation";

export function Header() {
  return (
    <header className={styles.header}>
      <Navigation />
      <section className={`container ${styles.header_hero}`}>
        <div className={styles.header_content}>
          <p className="subtitle">Nail care</p>
          <h1 className="title">enjoy the best nail care in Amsterdam</h1>
        </div>
        <div className={styles.hero_image}>
          <Image
            src="/hero_pic.webp"
            alt=""
            width={720}
            height={500}
            className={styles.hero_img}
          />
        </div>
      </section>
    </header>
  );
}
