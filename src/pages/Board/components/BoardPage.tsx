import styled from 'styled-components';
import useUserInfo from '../../../store/UserInfo';
import backgroundImages from '../../../assets/backgrounds';

const BoardPage = () => {
  const { board_name, bg_num } = useUserInfo();
  if (!backgroundImages.length) {
    return <div>배경 이미지를 로드할 수 없습니다.</div>;
  }

  return (
    <BoardContainer $background={backgroundImages[bg_num]?.img || ''}>
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