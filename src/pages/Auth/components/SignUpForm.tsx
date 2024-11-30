import React, { useState, FormEvent } from "react";
import styled from "styled-components";
import { Button, TextField } from "@mui/material";

const SignUpForm: React.FC = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signUpError, setSignUpError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSignUpError(""); // 에러 초기화
  };

  return (
    <SignUpFormBox onSubmit={handleSubmit}>
      <TextFieldContainer>
        <SignUpTextField
          type="text"
          variant="filled"
          label="닉네임"
          
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </TextFieldContainer>
      <TextFieldContainer>
        <SignUpTextField
          variant="filled"
          label="비밀번호"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </TextFieldContainer>
      <TextFieldContainer>
        <SignUpTextField
          variant="filled"
          label="비밀번호 확인"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </TextFieldContainer>
      <SubmitButton variant="contained" type="button" onClick={()=>{}}>
        칠판 만들기
      </SubmitButton>
      {signUpError && <ErrorText>{signUpError}</ErrorText>}
    </SignUpFormBox>
  );
};

// Styled Components
const SignUpFormBox = styled.form`
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

const SignUpTextField = styled(TextField)`
  width: 100%;
`;

const SubmitButton = styled(Button)`
  && {
    width: 200px;
    margin: 10px;
    color: #013C24;
    border-radius: 30px;
    max-width: 350px;
    background: white;
    font-size: 16px;
    padding: 10px;
    text-transform: none;
    &:hover {
      background: #f0f0f0;
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

export default SignUpForm;