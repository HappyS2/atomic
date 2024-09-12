import React from 'react';
import styled from 'styled-components';

interface ImgProps {
  width?: string;
  height?: string;
  filter?: string;
  className?: string;
}

const LogoImg = styled.img<ImgProps>`
  width: ${(props) => (props.width ? props.width : '18.1rem')};
  object-fit: contain;

  &.black {
    filter: brightness(0) invert(0);
  }
  &.white {
    filter: brightness(0) invert(1);
  }
`;

const Logo = ({ width, className, filter }: ImgProps) => {
  return <LogoImg width={width} className={`logo ${className}`} filter={filter} src="img/logo.png" alt="logo" />;
};

export default Logo;
