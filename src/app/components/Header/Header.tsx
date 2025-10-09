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
          <h1 className={`highlight ${styles.title}`}>
            The best nail service in Amsterdam
          </h1>
          <p className={styles.call}>Make your nails perfect right now!</p>
          <a className="link_btn">Book an appointment</a>
        </div>
        <div className={styles.hero_image}>
          <Image
            src="/hero_pic.webp"
            alt=""
            width={600}
            height={500}
            className={styles.hero_img}
          />
        </div>
      </section>
    </header>
  );
}
