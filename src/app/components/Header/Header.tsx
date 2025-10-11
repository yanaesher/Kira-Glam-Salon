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
            src="/kira.jpg"
            alt="nail master"
            width={600}
            height={600}
            className={styles.hero_img}
            priority
          />
        </div>
      </section>
    </header>
  );
}
