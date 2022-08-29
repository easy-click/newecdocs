import React, {useEffect, useState} from 'react';
import {Navigation, A11y, Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import styles from './index.module.scss';

export default function Index() {
  return (
    <>
      <Swiper
        modules={[Navigation, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={2}
        navigation
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className={styles.swiperDisplay}
      >
        <SwiperSlide>
          <a href='https://www.bilibili.com/video/BV1Ng411o7ds/?spm_id_from=333.788' target='_blank'>
            <img src='/img/video/install.png' alt=''/>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='#' target='_blank'>
            <img src='/img/video/quick.png' alt=''/>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='#' target='_blank'>
            <img src='/img/video/gitlab+rainbond.png' alt=''/>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='#' target='_blank'>
            <img src='/img/video/enterprise-app-manage.png' alt=''/>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='#' target='_blank'>
            <img src='/img/video/pig.png' alt=''/>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='#' target='_blank'>
            <img src='/img/video/rainstore.png' alt=''/>
          </a>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
