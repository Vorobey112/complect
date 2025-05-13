import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import styles from './River.module.css';
import ModalTwo from "../ModalTwo/ModalTwo";

import 'swiper/css';
import 'swiper/css/navigation';

const images = [
  './public/river1.png',
  './public/river2.png',
  './public/river3.png',
];

export const River = () => {
  return (
    <div className={styles.container}>
      <div className={styles.riverInfo}>
        <div className={styles.right}>
          <h2 className={styles.riverTitle}>River Line</h2>
          <p className={styles.riverText}>
            Восемь жилых корпусов по 12-14 этажей выстроены вдоль реки Раменки
          </p>
        </div>
        <div className={styles.left}>
          <ModalTwo />
        </div>
      </div>

      <Swiper
      className={styles.swiper}
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={1}
        loop
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img className={styles.riverImage} src={src} alt={`slide-${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
