import React from 'react';
import * as S from './Banner01.styles';
import BannerMainImg from '@/components/atoms/img/BannerMainImg';
import TextH1 from '@/components/atoms/text/TextH1';
import TextLarge from '@/components/atoms/text/TextLarge';
import BannerWidthSlider from '@/components/molecule/BannerWidthSlider/BannerWidthSlider';

// 헤더
const Banner01 = () => {
  return (
    <S.Banner01Wrap>
      <div className="wrapper">
        <div className="textTop">
          <TextH1>
            <>
              미래를 연결하는 힘,
              <br />
              원격제어와 통신의 혁신
            </>
          </TextH1>
          <TextLarge>
            <>
              첨단 원격제어와 통신 기술로 당신의 삶을 더욱 편리하게.
              <br />
              서울이동통신은 기술의 발전이 가져오는 무한한 가능성을
              <br />
              통해, 모든 것이 연결된 미래를 선도합니다.
            </>
          </TextLarge>
        </div>
      </div>

      {/* <BannerMainImg /> */}
      <BannerWidthSlider />
    </S.Banner01Wrap>
  );
};

export default Banner01;
