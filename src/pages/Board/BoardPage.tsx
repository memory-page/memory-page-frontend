import styled from 'styled-components';
import backgroundImg from '../../assets/background.png';
import bg1 from '../../assets/bg-1.png';
import bg2 from '../../assets/bg-2.png';
import bg3 from '../../assets/bg-3.png';
import bg4 from '../../assets/bg-4.png';
import bg5 from '../../assets/bg-5.png';
import useUserInfo from '../../store/UserInfo';

const backgroundImages = [
  { img: backgroundImg, num: 0 },
  { img: bg1, num: 1 },
  { img: bg2, num: 2 },
  { img: bg3, num: 3 },
  { img: bg4, num: 4 },
  { img: bg5, num: 5 },
];

const BoardPage = () => {
  const { board_name } = useUserInfo();
  return (
    <BoardConatainer $background={bg2}>
      <BoardHeader>
        {board_name} 님의 <span style={{ color: 'green' }}>추억 칠판</span>
      </BoardHeader>

      <BoardFooter>
        <Button>
          <button className='login_button'>로그인 화면으로 돌아가기기</button>
          <button className='share_button'>칠판 공유하러 가기</button>
        </Button>
      </BoardFooter>
    </BoardConatainer>
  );
};
export default BoardPage;

const BoardConatainer = styled.div<{ $background: string }>`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  .login_button {
    width: 247px;
    height: 57px;
    font-size: 19px;
    border-radius: 20px;
    margin-bottom: 19px;
  }

  .share_button {
    width: 247px;
    height: 57px;
    font-size: 19px;
    border-radius: 20px;
  }
`;
