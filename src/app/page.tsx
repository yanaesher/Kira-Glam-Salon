import { PhoneCall } from "lucide-react";
import { WorksCarousel } from "./components/WorksCarousel/WorksCarousel";
import styles from "./page.module.css";
import Image from "next/image";
import { TeamMemberCard } from "./components/TeamMemberCard/TeamMemberCard";
import { teamData } from "./components/TeamMemberCard/data/team";
import { priceItems } from "./components/PricingItem/data/PriceItemsData";
import { PriceItem } from "./components/PricingItem/PriceItem";

export default function HomePage() {
  return (
    <>
      <section id="works" className={styles.services}>
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

      <section id="about" className={styles.about}>
        <div className={styles.aboutInner}>
          <div className={styles.aboutImage}>
            <Image src="/hero_pic.webp" alt="master" width={800} height={800} />
          </div>
          <div className={styles.aboutContent}>
            <h2 className="subtitle">About us</h2>
            <p className={`highlight ${styles.aboutWelcome}`}>
              Welcome to Kira Glam Nails!
            </p>
            <p className={styles.aboutIntro}>
              Kira Glam Nails is a perfect place to get high-quality nail
              service.
            </p>
            <p className={`${styles.aboutText} description`}>
              We are always aware of the latest trends and truly care about our
              clients. We also offer free Wi-Fi, relaxing music, and
              complimentary cookies and beverages to make your experience more
              enjoyable.
            </p>
            <div className={styles.aboutPhone}>
              <a href="tel:+31623471643" className={styles.phoneButton}>
                <PhoneCall width={26} height={26} />
              </a>
              <div className={styles.phoneInfo}>
                <p className={styles.phoneTitle}>Call us now!</p>
                <a href="tel:+31623471643" className={styles.phoneNumber}>
                  +31 6 23 47 16 43
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={styles.price_section}
        aria-labelledby="pricing-heading"
      >
        <div className={styles.container}>
          <div className={styles.content}>
            <p className={styles.kicker}>Pricing</p>
            <h2 id="pricing-heading" className={styles.title}>
              PRICING FOR MANICURE
            </h2>
            <p className={styles.lead}>
              We believe that your perfect nails are the result of the
              continuous search for excellence and attention to details.
            </p>

            <ul className={styles.list}>
              {priceItems.map((price) => (
                <PriceItem key={price.id} {...price} />
              ))}
            </ul>

            <div className={styles.ctaWrap}>
              <button className={styles.cta} type="button">
                Book Now
              </button>
            </div>
          </div>

          <div className={styles.media}>
            <Image
              src="/price.webp"
              alt="Manicure and flowers"
              width={800}
              height={800}
              className={styles.image}
              priority
            />
          </div>
        </div>
      </section>

      <section className={styles.team}>
        <div className="container">
          <p className="subtitle">Team</p>
          <h2 className="highlight">nail masters</h2>
          <div className={styles.teamGrid}>
            {teamData.map((member) => (
              <TeamMemberCard key={member.id} {...member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
