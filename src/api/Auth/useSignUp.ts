import axios from "axios";
import { useNavigate } from "react-router-dom";

interface SignUpRequest {
  board_name: string,
  password: string,
}

interface SignUpResponse {
  detail: string;
  data: {
    board_id: string;
  };
}

const useSignUp = () => {
	const apiUrl = import.meta.env.VITE_API_URL as string;
	const navigate = useNavigate();
	const signUp = async (
    board_name: string,
    password: string,
	): Promise<void> => {
		try {
			const requestData: SignUpRequest = {
        board_name,
        password,
			};
      const response = await axios.post<SignUpResponse>(`${apiUrl}/board/validate`, requestData);
      
			console.log("valid 통과", response.data);

      navigate('/board/create');
		} catch(error) {
      if (axios.isAxiosError(error)) {
        const message =
          error.response?.data?.message || "회원가입에 실패했습니다.";
        alert(message);
      } else {
        console.error("예상치 못한 오류:", error);
        alert("예상치 못한 오류가 발생했습니다.");
      }
    }
	};

	return signUp;
};

export default useSignUp;