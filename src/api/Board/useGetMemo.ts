import axios from 'axios';
import { Cookies } from 'react-cookie';

const useGetMemo = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const cookies = new Cookies();
  const token = cookies.get('access_token');

  const memo = async (memo_id: string): Promise<{ author: string; content: string; } | undefined> => {
    if (!memo_id) {
      console.error('메모 ID 누락');
      return undefined;
    }

    try {
      const response = await axios.get(`${apiUrl}/memo/${memo_id}`, {
        params: { memo_id, token },
      });

      const { author, content } = response.data.data;

      return { author, content};
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(error.response?.data?.message || '메모 불러오기 실패');
      } else {
        console.error('예상치 못한 오류:', error);
        alert('예상치 못한 오류 발생');
      }
    }
  };

  return memo;
};

export default useGetMemo;