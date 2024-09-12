import React, { Children } from 'react';
import styled from 'styled-components';
import Header from '../organisms/header/Header';
import Footer from '../organisms/footer/Footer';
import MainPage from '../pages/MainPage';

const LayoutContainer = styled.div``;

const Body = styled.div`
  min-height: calc(var(--vh, 10vh));
`;

// 헤더와 푸터가있는 레이아웃
const Layout = () => {
  return (
    <LayoutContainer>
      {/* 헤더 */}
      <Header />
      {/* 바디 */}
      <Body>
        <MainPage />
      </Body>
      {/* 푸터 */}
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
