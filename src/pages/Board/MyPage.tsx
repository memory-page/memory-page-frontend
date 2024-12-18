import styled from 'styled-components';
import useUserInfo from '../../store/UserInfo';
import { useNavigate } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import useBoard from '../../api/Board/useBoard';
import { useEffect, useState } from 'react';
import BoardPage from './components/BoardPage';

const MyPage = () => {
  const { board_name, setID, bg_num } = useUserInfo();
  const navigate = useNavigate();
  const cookies = new Cookies();
  const board = useBoard();
  const [isOwner, setIsOwner] = useState(true);

  const loadBoard = async () => {
    try {
      const data = await board();
      if (data) {
        setIsOwner(data.data.isOwner);
      }
    } catch (error) {
      console.log('칠판 불러오는는 중 오류 발생:', error);
    }
  };

  useEffect(() => {
    loadBoard();
    console.log(bg_num);
  }, [bg_num]);

  return (
    <BoardConatainer>
      <BoardPage/>

      <BoardFooter>
        {isOwner ? (
          <Button>
          <button
            className='button_up'
            onClick={() => {
              cookies.remove('access_token', { path: '/' });
              setID('');
              navigate('/login');
            }}
          >
            로그아웃
          </button>
          <button
            className='button_down'
            onClick={() => {
              navigate('/share');
            }}
          >
            칠판 공유하러 가기
          </button>
        </Button>
        ) : (
          <Button>
            <button
              className='button_up'
              onClick={() => {
                navigate('/');
              }}
            >
              전 어떤 친구였나요?
            </button>
            <button
              className='button_down'
              onClick={() => {
                navigate('/signup');
              }}
            >
              나도 칠판 만들고 싶어요!
            </button>
          </Button>
        )}
        
      </BoardFooter>
    </BoardConatainer>
  );
};
export default MyPage;

const BoardConatainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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

const BoardFooter = styled.div`
  height: 200px;
  width: 100%;
  background: #013c24;
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
  position: absolute;
  bottom: 0;
`;

const Button = styled.div`
  text-align: center;
  padding-top: 33px;
  .button_up {
    width: 247px;
    height: 57px;
    font-size: 19px;
    border-radius: 20px;
    margin-bottom: 19px;
  }

  .button_down {
    width: 247px;
    height: 57px;
    font-size: 19px;
    border-radius: 20px;
  }
`;
