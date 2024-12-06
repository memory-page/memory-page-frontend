import axios from "axios";
import { useNavigate } from "react-router-dom";

interface LoginRequest {
  board_name: string,
  password: string,
}

interface LoginResponse {
  detail: string;
  data: {
    board_id: string;
  };
}

const useLogin = () => {
	const apiUrl = import.meta.env.VITE_API_URL as string;
	const navigate = useNavigate();
	const login = async (
    board_name: string,
    password: string,
	): Promise<void> => {
		try {
			const requestData: LoginRequest = {
        board_name,
        password,
			};
      const response = await axios.post<LoginResponse>(`${apiUrl}/board/login`, requestData);
      
			console.log("로그인 성공", response.data);

      navigate('/board');
		} catch(error) {
      if (axios.isAxiosError(error)) {
        const message =
          error.response?.data?.message || "로그인에 실패했습니다.";
        alert(message);
      } else {
        console.error("예상치 못한 오류:", error);
        alert("예상치 못한 오류가 발생했습니다.");
      }
    }
	};

	return login;
};

export default useLogin;