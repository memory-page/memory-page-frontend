import React from 'react';
import styled from 'styled-components';
import stickerImg from '../assets/sticker.png';
import { Link } from 'react-router-dom';

const Title: React.FC = () => {
  return (
    <Header>
      <SubtitleContainer>
        <Sticker src={stickerImg} alt='스티커 이미지' />
        <Subtitle>당신에게 전 어떤 친구였나요?</Subtitle>
      </SubtitleContainer>
      <MainTitle to='/'>
        <WhiteText>추억의</WhiteText> <HighlightText>칠판</HighlightText>
      </MainTitle>
      <BetaTestNotice>
        2025년 1월 5일까지 진행되는 베타테스트입니다 :)<br />
        정식 버전으로 곧 다시 찾아뵐게요. 감사합니다!
      </BetaTestNotice>
    </Header>
  );
};

const Header = styled.div`
  margin: 100px 100px 50px 100px;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const MainTitle = styled(Link)`
  font-size: 36px;
  color: #ffa726; /* 제목 색상 */
  margin: 10px 0;
`;

const WhiteText = styled.span`
  color: white; /* 흰색 텍스트 */
`;

const HighlightText = styled.span`
  color: #ffe99c; /* 칠판 색상 */
`;

const SubtitleContainer = styled.div`
  position: relative; /* 스티커를 Subtitle 위에 겹치게 하기 위해 relative 설정 */
  display: inline-block; /* 콘텐츠 크기에 맞게 크기를 조정 */
`;

const Subtitle = styled.p`
  font-size: 14px;
  font-weight: 400;
`;

const Sticker = styled.img`
  position: absolute;
  top: -30px; /* 적절히 조정 */
  left: -30px; /* 적절히 조정 */
  width: 40px; /* 이미지 크기 조정 */
  height: auto;
`;

const BetaTestNotice = styled.div`
  font-size: 14px;
  color: white; /* 흰색 텍스트 */
  margin-top: 20px;
  line-height: 1.5;
  text-align: center;
`;

export default Title;
