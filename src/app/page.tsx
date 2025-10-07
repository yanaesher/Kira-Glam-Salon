import { WorksCarousel } from "./components/WorksCarousel/WorksCarousel";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <section className={styles.services}>
      <div className="container">
        <h2 className="subtitle">Our works</h2>
        <p className={styles.description}>
          All kinds of procedures for your hands
        </p>
        <div>
          <WorksCarousel />
        </div>
      </div>
    </section>
  );
}
