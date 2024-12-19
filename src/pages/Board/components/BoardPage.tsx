import styled from 'styled-components';
import { useEffect } from 'react';
import useUserInfo from '../../../store/UserInfo';
import useBoard from '../../../api/Board/useBoard';
import bg0 from '../../../assets/bg-0.png';
import bg1 from '../../../assets/bg-1.png';
import bg2 from '../../../assets/bg-2.png';
import bg3 from '../../../assets/bg-3.png';
import bg4 from '../../../assets/bg-4.png';
import bg5 from '../../../assets/bg-5.png';

const backgroundImages = [bg0, bg1, bg2, bg3, bg4, bg5];

const BoardPage = () => {
  const { board_name, bg_num } = useUserInfo();

  return (
    <BoardContainer $background={backgroundImages[bg_num]}>
      <BoardHeader>
        {board_name} 님의 <span style={{ color: 'green' }}>추억 칠판</span>
      </BoardHeader>
    </BoardContainer>
  );
};

export default BoardPage;

// Styled Components
const BoardContainer = styled.div<{ $background: string }>`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${(props) => props.$background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const BoardHeader = styled.div`
  height: 57px;
  width: 356px;
  background: white;
  margin: 17px;
  border-radius: 20px;
  text-align: center;
  align-content: center;
  font-size: 22px;
`;