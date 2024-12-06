import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Cookies } from "react-cookie";

interface LoginRequest {
  board_name: string,
  password: string,
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

	const login = async (
    board_name: string,
    password: string,
	): Promise<void> => {
    const requestData: LoginRequest = {
      board_name,
      password,
    };
    await axios.post<LoginResponse>(`${apiUrl}/board/login`, requestData)
    .then(response=>{
      const token = response.data.data.access_token;
      cookies.set("access_token", token, {
        path: "/",
        httpOnly: false,
        secure: true,
        sameSite: "strict",
      })
      navigate("/board");
    }).catch(error => {
      alert("로그인 실패" + error);
    })
	};

	return login;
};

export default useLogin;