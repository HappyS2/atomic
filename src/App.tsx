import React, { useState, useEffect } from 'react';
import * as S from './styles/GlobalStyles.styles';
import { ThemeProvider } from 'styled-components';
import { darkTheme, theme } from './styles/theme';
import Layout from './components/layout/Layout';

// 윈도우 높이 조절
function setScreenSize(): void {
  const vh: number = window.innerHeight;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// 높이값 호출
const setVh = () => {
  document.documentElement.style.setProperty('--vh', `${window.innerHeight}px`);
};
window.addEventListener('resize', setVh);
setVh();

function App() {
  // 다크모드 일반모드 STATE
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // 높이값 호출
  useEffect(() => {
    setScreenSize();
  }, []); // 의존성 배열을 비워서 마운트될 때 한 번만 실행되도록 설정

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : theme}>
      {/* 전반적인 스타일을 관리 */}
      <S.GlobalStyle />
      {/* 레이아웃 (헤더, 바디, 푸터) */}
      <Layout />
    </ThemeProvider>
  );
}

export default App;
