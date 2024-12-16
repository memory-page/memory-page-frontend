import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import useUserInfo from '../../store/UserInfo';
import { useEffect } from 'react';

interface LoginRequest {
  board_name: string;
  password: string;
}

interface LoginResponse {
  detail: string;
  data: {
    board_id: string;
    access_token: string;
  };
}

const useLogin = () => {
  const apiUrl = import.meta.env.VITE_API_URL as string;
  const navigate = useNavigate();
  const cookies = new Cookies();
  const { id, setID } = useUserInfo();

  useEffect(() => {
    if (id) {
      navigate(`/board/${id}`);
    }
  }, [id, navigate]);

  const login = async (board_name: string, password: string): Promise<void> => {
    const requestData: LoginRequest = {
      board_name,
      password,
    };
    await axios
      .post<LoginResponse>(`${apiUrl}/board/login`, requestData)
      .then((response) => {
        const token = response.data.data.access_token;
        cookies.set('access_token', token, {
          path: '/',
          httpOnly: false,
          secure: true,
          sameSite: 'strict',
        });

        setID(response.data.data.board_id);
      })
      .catch((error) => {
        if (axios.isAxiosError(error)) {
          const detailMessage =
            error.response?.data?.detail || '알 수 없는 오류가 발생했습니다.';
          throw new Error(detailMessage); // 에러를 throw하여 상위 컴포넌트에서 처리
        } else {
          throw new Error('예상치 못한 오류가 발생했습니다.');
        }
      });
  };

  return login;
};

export default useLogin;
