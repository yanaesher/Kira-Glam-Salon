import Image from "next/image";
import styles from "./TeamMemberCard.module.css";
import type { TeamMember } from "./data/team.ts";

export function TeamMemberCard({ image, name, role }: TeamMember) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={name}
          width={240}
          height={280}
          className={styles.image}
        />
      </div>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.role}>{role}</p>
    </div>
  );
}
