import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import useBoard from '../../api/Board/useBoard';
import useUserInfo from '../../store/UserInfo';
import BoardPage from './components/BoardPage';

const MyPage = () => {
  const { id } = useParams<{ id: string }>();
  const { setID, is_self } = useUserInfo();
  const navigate = useNavigate();
  const cookies = new Cookies();
  const board = useBoard();
  const loadBoardData = async () => {
    try {
      const data = await board();
    } catch (error) {
      console.error('칠판 불러오는 중 오류:', error);
    }
  };

  useEffect(() => {
    if (id) {
      loadBoardData();
    }
  }, [id]);

  const handleLogout = () => {
    cookies.remove('access_token', { path: '/' });
    setID('');
    navigate('/login');
  };

  const renderButtons = () =>
    is_self ? (
      <>
        <StyledButton onClick={handleLogout}>로그아웃</StyledButton>
        <StyledButton onClick={() => navigate('/share')}>칠판 공유하기</StyledButton>
      </>
    ) : (
      <>
        <StyledButton onClick={() => navigate('/')}>전 어떤 친구였나요?</StyledButton>
        <StyledButton onClick={() => navigate('/signup')}>나도 칠판 만들기</StyledButton>
      </>
    );

  return (
    <BoardContainer>
      <BoardPage />
      <BoardFooter>{renderButtons()}</BoardFooter>
    </BoardContainer>
  );
};

export default MyPage;

// Styled Components
const BoardContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const BoardFooter = styled.div`
  height: 200px;
  width: 100%;
  background: #013c24;
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.button`
  width: 247px;
  height: 57px;
  font-size: 19px;
  border-radius: 20px;
  margin: 10px;
  color: #013c24;
  background: white;
  border: none;
  cursor: pointer;

  &:hover {
    background: #016340;
  }
`;