import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useUserInfo from '../../store/UserInfo';
import { Cookies } from 'react-cookie';

const useBoard = () => {
  const apiUrl = import.meta.env.VITE_API_URL as string;
  const cookies = new Cookies();
  const { id, setBgNum } = useUserInfo();
  const token = cookies.get('access_token');
  console.log("!");
  const board = async (): Promise<void> => {
    try {
      const response = await axios.get(
        `${apiUrl}/board/${id}?board_id=${id}&token=${token}`
      );

      console.log('배경 번호:', response.data.data.bg_num);
      console.log('메모 리스트', response.data.data.memo_list);
      setBgNum(response.data.data.bg_num);

      console.log('/board/{board_id} 통신성공');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message =
          error.response?.data?.message || '칠판 불러오기기에 실패했습니다.';
        alert(message);
      } else {
        console.error('예상치 못한 오류: ', error);
        alert('예상치 못한 오류가 발생했습니다.');
      }
    }
  };

  return board;
};
export default useBoard;
