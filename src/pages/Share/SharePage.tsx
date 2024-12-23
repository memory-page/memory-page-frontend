import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import bg0 from '../../assets/background/bg-0.png';
import Title from '../../components/Title';
import instagramIcon from '../../assets/instagram.png';
import kakaotalkIcon from '../../assets/kakaotalk.png';
import useUserInfo from '../../store/UserInfo';

declare global {
  interface Window {
    Kakao: any;
  }
}

const SharePage: React.FC = () => {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const { id } = useUserInfo();
  const handleSubmit = async () => {
    const token = cookies.get('access_token');
    if (!token) {
      // 토큰이 없으면 로그인 페이지로 리다이렉트
      console.warn('토큰 없음: 로그인 페이지로 이동');
      navigate('/login');
      return;
    }

    // 토큰이 유효하다고 가정하고 칠판으로 이동
    console.log('토큰 확인 완료, 칠판으로 이동');
    navigate(`/board/${id}`);
  };

  useEffect(() => {
    const loadKakaoSDK = () => {
      if (!window.Kakao) {
        console.warn('Kakao SDK not loaded!');
        return;
      }
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init('3316792d09958ac7dd7f5e5046f30715');
        console.log('Kakao SDK 초기화 여부 : ', window.Kakao.isInitialized());
      }
    };

    if (!window.Kakao) {
      const script = document.createElement('script');
      script.src = 'https://developers.kakao.com/sdk/js/kakao.min.js';
      script.onload = loadKakaoSDK;
      document.body.appendChild(script);
    } else {
      loadKakaoSDK();
    }
  }, []);

  const shareToKakao = () => {
    if (!window.Kakao) {
      alert('Kakao SDK not loaded!');
      return;
    }

    window.Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: '추억의 칠판',
        description: '친구 추억 칠판에 롤링페이퍼를 붙여주세요!',
        imageUrl:
          'https://cdn.pixabay.com/photo/2016/08/12/19/34/ceismas-1589483_1280.jpg',
        link: {
          mobileWebUrl: '',
          webUrl: '',
        },
      },
      // buttons: [
      //   {
      //     title: '웹으로 보기',
      //     link: {
      //       webUrl: 'https://www.naver.com',
      //     },
      //   },
      //   {
      //     title: '앱으로 보기',
      //     link: {
      //       mobileWebUrl: 'https://www.naver.com',
      //       webUrl: 'https://www.naver.com',
      //     },
      //   },
      // ],
    });
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
        <SubmitButton variant='contained' type='button' onClick={shareToKakao}>
          <Icon src={kakaotalkIcon} alt='Kakaotalk Icon' />
          카카오톡으로 공유
        </SubmitButton>
        <SubmitButton variant='contained' type='button' onClick={handleSubmit}>
          생성된 칠판 보러가기
        </SubmitButton>
        <StyledLink to='/dev'>개발자 소개 보러가기</StyledLink>
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

  background-image: url(${bg0});
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
