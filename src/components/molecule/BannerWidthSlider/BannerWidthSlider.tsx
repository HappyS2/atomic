import React from 'react';
import * as S from './BannerWidthSlider.styles';
import BannerMainImg from '@/components/atoms/img/BannerMainImg';

// Import Swiper core styles and modules from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// const Swiper = styled.div``;

const BannerWidthSlider = () => {
  return (
    <S.BannerWidthSliderWrap>
      <Swiper
        className="swiper"
        modules={[Navigation, Pagination]}
        // navigation
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
      >
        <SwiperSlide>
          <BannerMainImg />
        </SwiperSlide>
        <SwiperSlide>
          <BannerMainImg />
        </SwiperSlide>
        <SwiperSlide>
          <BannerMainImg />
        </SwiperSlide>
      </Swiper>
    </S.BannerWidthSliderWrap>
  );
};

export default BannerWidthSlider;
