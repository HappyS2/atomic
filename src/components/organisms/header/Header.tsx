import React from 'react';
import * as S from './Header.styles';
import BaseButton from '@/components/atoms/button/BaseButton';
import SmallLogo from '@/components/atoms/logo/SmallLogo';
import NavigationHeader from '@/components/molecule/navigationHeader/NavigationHeader';

// 헤더
const Header = () => {
  return (
    <S.HeaderContainer>
      <S.HeaderWrap>
        <SmallLogo />
        <div className="menuGroup">
          <NavigationHeader />
          <BaseButton className="border dark600 round loginBtn" padding=".8rem 1.8rem">
            로그인 / 회원가입
          </BaseButton>
        </div>
      </S.HeaderWrap>
    </S.HeaderContainer>
  );
};

export default Header;
