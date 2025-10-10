import Image from "next/image";
import styles from "./work.module.css";
import { Work } from "@/app/components/WorksCarousel/data/works";

interface WorkCardProps {
  work: Work;
}

export function WorkCard({ work }: WorkCardProps) {
  return (
    <div className={styles.service_card}>
      <div className={styles.image_container}>
        <Image
          src={work.img}
          alt={work.title}
          width={400}
          height={300}
          className={styles.service_image}
        />
      </div>
    </div>
  );
}
