import styled from 'styled-components';
import useUserInfo from '../../../store/UserInfo';
import backgroundImages from '../../../assets/backgrounds';
import {useLocation, useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleCheck,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';

interface BoardPageProps {
  onSubmit?: () => void;
}

const BoardPage: React.FC<BoardPageProps> = ({ onSubmit }) => {
  const { board_name, bg_num } = useUserInfo();
  const location = useLocation();
  const navigate = useNavigate();

  const isCreatePage = location.pathname.includes('/create');
  console.log(bg_num);

  if (!backgroundImages.length) {
    return <div>배경 이미지를 로드할 수 없습니다.</div>;
  }

  return (
    <BoardContainer $background={backgroundImages[bg_num]?.img || ''}>
      { isCreatePage ? (
        <Header>
          <CancelButton>
            <FontAwesomeIcon icon={faCircleXmark} onClick={() => navigate(-1)} />
          </CancelButton>
          <SubmitButton onClick={onSubmit}>
            <FontAwesomeIcon icon={faCircleCheck} />
          </SubmitButton>
        </Header>
      ) : (
        <BoardHeader>
          {board_name} 님의 <span style={{ color: 'green' }}>추억 칠판</span>
        </BoardHeader>
      )}
    </BoardContainer>
  );
};

export default BoardPage;

// Styled Components
const BoardContainer = styled.div<{ $background: string }>`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-image: url(${(props) => props.$background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
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


const Header = styled.div`
  position: relative;
  width: 100%;
`;

const CancelButton = styled.div`
  position: absolute;
  top: 10px;
  left: 14px;
  font-size: 45px;
  color: #d9d9d9;
  opacity: 0.7;
  cursor: pointer;
`;

const SubmitButton = styled.div`
  position: absolute;
  top: 10px;
  right: 14px;
  font-size: 45px;
  color: #d9d9d9;
  opacity: 0.7;
  cursor: pointer;
`;