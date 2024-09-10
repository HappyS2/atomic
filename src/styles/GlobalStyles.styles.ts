import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

	/* 기본적인 리셋 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* html 기본 설정 */
html {
	font-size: 10px;
  scroll-behavior: smooth;
}

/* body 설정 */
body {
  font-family: 'SUIT', sans-serif; 
  margin: 0;
  padding: 0;
  min-height: 100vh; /* 최소 높이 설정 */
	font-size: 1.6rem;
	color: ${(props) => props.theme.colors.txt600};
}

/* 링크 기본 설정 */
a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

/* 이미지 및 비디오 반응형 설정 */
img, video {
  max-width: 100%;
  height: auto;
  display: block;
}

/* 리스트 기본 설정 */
ul, ol {
  list-style: none;
}

/* 폼 요소 초기화 */
input, button, textarea, select {
  font: inherit;
}

/* 기본적인 컨테이너 설정 */
.wrapper {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}
`;
