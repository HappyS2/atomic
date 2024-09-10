import React from 'react';
import styled from 'styled-components';
import ArrowUp from '../../atoms/icons/ArrowUp';
import Logo from '../../atoms/logo/logo';

const HeaderContainer = styled.div`
  color: red;
`;

// 헤더
const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      {/* <ArrowUp /> */}
    </HeaderContainer>
  );
};

export default Header;
