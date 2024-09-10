import React, { Children } from 'react';
import styled from 'styled-components';
import Header from '../organisms/header/Header';
import BodyRoutes from '../../routes/AppRoutes';
import Footer from '../organisms/footer/Footer';

const LayoutContainer = styled.div``;

// 헤더와 푸터가있는 레이아웃
function Layout() {
  return (
    <LayoutContainer>
      <Header />

      {/* 바디() - 라우터로 관리  */}
      <BodyRoutes />

      <Footer />
    </LayoutContainer>
  );
}

export default Layout;
