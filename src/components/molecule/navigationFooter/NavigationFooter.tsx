import React from 'react';
import * as S from './NavigationFooter.styles';
import ArrowDown from '@/components/atoms/icons/ArrowDown';

const NavigationFooter = () => {
  return (
    <S.NavigationFooterWrap>
      {/* 회사소개 */}
      <li>
        <button>회사소개</button>
        <ul>
          <li>
            <button>비전</button>
          </li>
          <li>
            <button>연혁</button>
          </li>
          <li>
            <button>CI</button>
          </li>
        </ul>
      </li>
      {/* 솔루션 */}
      <li>
        <button>솔루션</button>
        <ul>
          <li>
            <button>원격제어</button>
          </li>
          <li>
            <button>무선호출</button>
          </li>
          <li>
            <button>015 AI 삐삐</button>
          </li>
        </ul>
      </li>
      {/* 고객지원 */}
      <li>
        <button>고객지원</button>
        <ul>
          <li>
            <button>공지사항</button>
          </li>
          <li>
            <button>자주 묻는 질문</button>
          </li>
          <li>
            <button>고객센터</button>
          </li>
          <li>
            <button>제휴문의</button>
          </li>
        </ul>
      </li>
      {/* familysite */}
      <li>
        <button>familysite</button>
        <ul>
          <li>
            <button>Standard Networks</button>
          </li>
          <li>
            <button>015 Works</button>
          </li>
          <li>
            <button>Arreo</button>
          </li>
          <li>
            <button>Netian</button>
          </li>
        </ul>
      </li>
    </S.NavigationFooterWrap>
  );
};

export default NavigationFooter;
