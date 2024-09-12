import React from 'react';
import * as S from './NavigationHeader.styles';
import ArrowDown from '@/components/atoms/icons/ArrowDown';

const NavigationHeader = () => {
  return (
    <S.NavigationWrap>
      <div className="back" />

      <S.Navigation>
        <li>
          <button>
            회사소개 <ArrowDown />
          </button>
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
        <li>
          <button>
            서비스안내 <ArrowDown />
          </button>
        </li>
        <li>
          <button>제휴 문의</button>
        </li>
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
      </S.Navigation>
    </S.NavigationWrap>
  );
};

export default NavigationHeader;
