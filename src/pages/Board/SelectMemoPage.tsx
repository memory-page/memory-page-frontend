import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState, useEffect  } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BoardPage from './components/BoardPage';
import { Cookies } from 'react-cookie';
import useBoard from '../../api/Board/useBoard';
import useMemo from '../../api/Board/useMemo';
import useUserInfo from '../../store/UserInfo';

const SelectMemoPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const board = useBoard();
  const memo = useMemo();

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

  const handleButtonClick = async (index: number) => {
    if(!id){
      console.error('보드 ID 누락')
      return;
    }
    try{
      await memo(index);
    } catch (error) {
      console.log('메모 생성 중:', error);
    }
  };

  return (
    <CreateContainer>
      
      <BoardPage onAddButtonClick={handleButtonClick} />
      <BoardFooter>
        원하는 위치를 선택해주세요
      </BoardFooter>
      
    </CreateContainer>
  );
};
export default SelectMemoPage;

const CreateContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
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
  font-size: 19px;
  color: white;
`;
