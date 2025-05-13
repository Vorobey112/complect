import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './View.module.css';

import slide1 from '../../assets/slide1.png';
import slide2 from '../../assets/slide2.png';
import slide3 from '../../assets/slide3.png';

const images = [slide1, slide2, slide3];

export const View = () => {
  const words = ['Поклонная гора', 'Москва Сити', 'Матвеевский лес'];

  return (
    <div className={styles.view}>
      <h1>Наслаждайтесь видами из окон своей квартиры</h1>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className}">${words[index]}</span>`;
          },
        }}
        loop
        speed={700}
        spaceBetween={20}
        slidesPerView={1}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`slide-${index}`} className={styles.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
