import styled from 'styled-components';

export const BannerSwiperWrap = styled.div`
  .swiper {
    .swiper-wrapper {
      padding-bottom: 2.2rem;
    }
    .swiper-pagination {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.4rem;
    }
    .swiper-pagination-bullet {
      width: 15rem;
      height: 0.3rem;
      border-radius: 4rem;
    }
    .swiper-pagination-bullet-active {
      background: ${(props) => props.theme.colors.main2};
    }
  }
  .textTop {
    padding: 10rem 0 6rem;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }
`;
