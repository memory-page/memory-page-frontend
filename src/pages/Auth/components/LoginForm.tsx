import React, { useState, FormEvent } from "react";
import styled from "styled-components";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import { Button, IconButton, TextField } from "@mui/material";

const LoginForm: React.FC = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoginError(""); // 에러 초기화
  };

  return (
    <LoginFormBox onSubmit={handleSubmit}>
      <TextFieldContainer>
        <LoginTextField
          type="text"
          variant="filled"
          label="닉네임"
          
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </TextFieldContainer>
      <TextFieldContainer>
        <LoginTextField
          variant="filled"
          label="비밀번호"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </TextFieldContainer>
      <SubmitButton variant="contained" type="submit">
        칠판 확인하기
      </SubmitButton>
      {loginError && <ErrorText>{loginError}</ErrorText>}
    </LoginFormBox>
  );
};

// Styled Components
const LoginFormBox = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextFieldContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 350px;
  margin-bottom: 16px;
  border-radius: 8px;
  position: relative;
  color: white;

  /* 하단 흰 줄 */
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: white;
    border-radius: 4px;
  }
`;

const LoginTextField = styled(TextField)`
  width: 100%;
`;

const SubmitButton = styled(Button)`
  && {
    color: #013C24;
    border-radius: 30px;
    width: 100%;
    max-width: 350px;
    background: white;
    font-size: 16px;
    padding: 10px;
    text-transform: none;
    &:hover {
      background: #255080;
    }
  }
`;

const ErrorText = styled.div`
  color: red;
  font-size: 0.875rem;
  text-align: center;
  margin-top: 8px;
`;

const StatusText = styled.div`
  font-size: 0.875rem;
  text-align: left;
  margin-top: -10px;
  margin-bottom: 10px;
  width: 100%;
  max-width: 350px;
`;

export default LoginForm;