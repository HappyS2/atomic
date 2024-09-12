import React from 'react';
import * as S from './Footer.styles';
import Logo from '@/components/atoms/logo/Logo';
import TextH3 from '@/components/atoms/text/TextH3';
import TextNormal from '@/components/atoms/text/TextNormal';
import TextButton from '@/components/atoms/button/TextButton';
import NavigationFooter from '@/components/molecule/navigationFooter/NavigationFooter';

// 푸터
const Footer = () => {
  return (
    <S.FooterContainer>
      <div className="wrapper">
        <S.FooterNavContainer>
          <Logo className="white logo" />
          <NavigationFooter />
        </S.FooterNavContainer>
        <S.FooterLegal className="flex flexJustifyBetween">
          <S.FooterAddress className="footerAddress cl200">
            <TextNormal>대표이사: 이주호</TextNormal>
            <TextNormal>서울시 강남구 봉은사로 18길 84, 4층</TextNormal>
            <TextNormal>사업자등록번호: 114-86-19326</TextNormal>
            <TextNormal>통신판매업신고번호: 강남-11625</TextNormal>
          </S.FooterAddress>
          <S.FooterLicenses className="footerLicenses cl200">
            <TextButton>이용약관</TextButton>
            <TextButton>개인정보처리방침</TextButton>
            <TextButton>청소년보호정책</TextButton>
            <TextButton>스팸정책</TextButton>
            <TextButton>전자메일무단수집거부</TextButton>
          </S.FooterLicenses>
        </S.FooterLegal>
        <S.Reserved className="reserved">
          <TextNormal as="span" className="cl200">
            © Seoul Mobile telecom, Inc. All rights reserved.
          </TextNormal>
        </S.Reserved>
      </div>
    </S.FooterContainer>
  );
};

export default Footer;
