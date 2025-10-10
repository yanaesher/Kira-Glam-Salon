"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Keyboard,
  Navigation,
  Pagination,
  A11y,
  Autoplay,
} from "swiper/modules";
import { WORKS } from "./data/works";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { WorkCard } from "../WorkCard/WorkCard";
import styles from "./works-carousel.module.css";

export function WorksCarousel() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className={styles.carouselWrapper}>
      <Swiper
        modules={[Keyboard, Navigation, Pagination, A11y, Autoplay]}
        className={styles.carousel}
        spaceBetween={16}
        slidesPerView={1}
        centeredSlides={false}
        pagination={{ clickable: true }}
        navigation
        keyboard={{ enabled: true, onlyInViewport: true }}
        a11y={{ enabled: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        observer
        observeParents
        resizeObserver
        loop
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 16 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 24 },
        }}
      >
        {WORKS.map((work) => (
          <SwiperSlide key={work.id}>
            <WorkCard work={work} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
