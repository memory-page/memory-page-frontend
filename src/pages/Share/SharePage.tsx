import React from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';

import backgroundImg from '../../assets/background.png';
import Title from '../../components/Title';
import instagramIcon from '../../assets/instagram.png';
import kakaotalkIcon from '../../assets/kakaotalk.png';

const SharePage: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <ShareContainer>
      <Title />
      <ExplainText>추억 칠판이 생성되었습니다</ExplainText>
      <ExplainText>이제 공유를 해볼까요?</ExplainText>
      <Footer>
        <SubmitButton variant='contained' type='button' onClick={() => {}}>
          <Icon src={instagramIcon} alt='Instagram Icon' />
          인스타그램으로 공유
        </SubmitButton>
        <SubmitButton variant='contained' type='button' onClick={() => {}}>
          <Icon src={kakaotalkIcon} alt='Kakaotalk Icon' />
          카카오톡으로 공유
        </SubmitButton>
        <SubmitButton
          variant='contained'
          type='button'
          onClick={() => handleNavigate('/board')}
        >
          생성된 칠판 보러가기
        </SubmitButton>
        <StyledLink to='/intro'>개발자 소개 보러가기</StyledLink>
      </Footer>
    </ShareContainer>
  );
};

// Styled Components
const ShareContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;

  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Footer = styled.div`
  font-size: 15px;
  text-align: center;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

const SubmitButton = styled(Button)`
  && {
    display: flex;
    justify-content: space-evenly;
    width: 200px;
    margin: 10px;
    color: #013c24;
    border-radius: 30px;
    max-width: 350px;
    background: white;
    font-size: 16px;
    padding: 10px;
    text-transform: none;
  }
`;

const Icon = styled.img`
  width: 20px; /* 아이콘 크기 */
  height: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 20px 5px;
  color: white;
`;

const ExplainText = styled.div`
  text-align: center;
  margin-bottom: 10px;
  width: 100%;
  max-width: 350px;
`;

export default SharePage;
