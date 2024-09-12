import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg``;

const ArrowUp: React.FC<React.SVGProps<SVGSVGElement>> = ({ width, height, fill }: any) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? '14'}
      height={height ?? '14'}
      viewBox="0 0 14 14"
      fill="none"
    >
      <path
        d="M0.922185 11.832C0.629291 12.1249 0.629291 12.5997 0.922185 12.8926C1.21508 13.1855 1.68995 13.1855 1.98284 12.8926L0.922185 11.832ZM13.5162 1.0486C13.5162 0.634384 13.1804 0.298597 12.7662 0.298597L6.01622 0.298597C5.60201 0.298597 5.26622 0.634383 5.26622 1.0486C5.26622 1.46281 5.60201 1.7986 6.01622 1.7986L12.0162 1.7986L12.0162 7.7986C12.0162 8.21281 12.352 8.5486 12.7662 8.5486C13.1804 8.5486 13.5162 8.21281 13.5162 7.7986L13.5162 1.0486ZM1.98284 12.8926L13.2966 1.57893L12.2359 0.518267L0.922185 11.832L1.98284 12.8926Z"
        fill={fill ?? 'currentColor'}
      />
    </Svg>
  );
};

export default ArrowUp;
