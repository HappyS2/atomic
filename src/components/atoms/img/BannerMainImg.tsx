import React from 'react';
import styled from 'styled-components';

interface ImgProps {
  width?: string;
  height?: string;
  filter?: string;
  className?: string;
}

const BannerImg = styled.div<ImgProps>`
  width: 100%;
  height: 60rem;
  background-image: url(img/mainBanner/main-Banner.png);
  background-position: center;
  background-size: cover;
`;

const BannerMainImg = ({ width, className, filter }: ImgProps) => {
  return (
    <BannerImg
      width={width}
      className={`banner ${className}`}
      filter={filter}
      // src="img/mainBanner/main-Banner.png"
      // alt="main-Banner"
    />
  );
};

export default BannerMainImg;
