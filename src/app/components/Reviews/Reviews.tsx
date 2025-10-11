"use client";

import styles from "./reviews.module.css";
import ReviewCard from "./ReviewCard";
import { Review } from "./types";

// Импорт Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const reviews: Review[] = [
  {
    id: 1,
    name: "Anzhelika",
    nailMaster: "Kira",
    text: "I always have a lovely experience at this salon, no matter the master! This time I had an appointment with Kira. She is a great professional, but also very nice and pleasant to talk to.",
    date: "October 08, 2025",
  },
  {
    id: 2,
    name: "Veronika",
    nailMaster: "Kira",
    text: "Fantastic experience as always! Always recommending to my friends.",
    date: "October 02, 2025",
  },
  {
    id: 3,
    name: "Valerie",
    nailMaster: "Kira",
    text: "Kira is an amazing master! My nails are super cool! I got so many compliments for the design 😊",
    date: "September 25, 2025",
  },
  {
    id: 4,
    name: "Julia",
    nailMaster: "Kira",
    text: "As always beautiful nails! Last for more than 4 weeks and not breaking!",
    date: "June 24, 2025",
  },
  {
    id: 5,
    name: "Anni",
    nailMaster: "Kira",
    text: "Always so amazing and detailed results by Ludmila. Love it!",
    date: "June 24, 2025",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className={styles.section}>
      <div className="container">
        <h2 className="subtitle">Reviews</h2>
        <p className={`highlight ${styles.highlight}`}>Our clients about us</p>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          className={styles.swiper}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((item) => (
            <SwiperSlide key={item.id}>
              <ReviewCard review={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
