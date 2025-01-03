import styled from 'styled-components';
import useUserInfo from '../../../store/UserInfo';
import backgroundImages from '../../../assets/backgrounds';
import memoImages from '../../../assets/memo';
import {useLocation, useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleCheck,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';
import AddIcon from '@mui/icons-material/Add';

interface BoardPageProps {
  onSubmit?: () => void;
  onAddButtonClick?: (index: number) => void;
}

const BoardPage: React.FC<BoardPageProps> = ({ onSubmit, onAddButtonClick }) => {
  const { board_name, bg_num, memo_list } = useUserInfo();
  const location = useLocation();
  const navigate = useNavigate();

  const isCreatePage = location.pathname.includes('/create');
  const isSelectPage = location.pathname.includes('/select');

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
        { isCreatePage ? (<></>
      ) : (
        <MemoGrid>
          {Array.from({ length: 20 }).map((_, idx) => {
            const memo = memo_list?.find((m) => m.locate_idx === idx);
            return (
              <MemoSlot key={idx}>
                {memo ? (
                  <Memo $background={memoImages[memo.bg_num]?.img} />
                ) : (
                  <>
                    {isSelectPage ? (
                      <AddButton onClick={() => onAddButtonClick?.(idx)}>
                        <AddIcon fontSize="large"/>
                      </AddButton>
                    ) : (
                      <></>
                    )}
                  </>
                )}
              </MemoSlot>
            );
          })}
        </MemoGrid>
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

const MemoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

  padding: 30px 15px 0px 15px;
`;

const MemoSlot = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Memo = styled.div<{ $background: string }>`
  width: 70px;
  height: 70px;
  background-image: url(${(props) => props.$background});
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat;
  border-radius: 5px;
`;

const AddButton = styled.button`
  background: transparent;
  border: 1px dashed #ccc;
  background-color:#f0f0f0;
  opacity : 0.5;
  border-radius: 20px;
  width: 90%;
  height: 90%;
  cursor: pointer;
`;