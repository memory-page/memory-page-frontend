import React, { useState } from "react";
import styled from "styled-components";
import { Button, TextField } from "@mui/material";
import useSignUp from "../../../api/Auth/useSignUp";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useUserInfo from '../../../store/UserInfo';

const SignUpForm: React.FC = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [graduationDate, setGraduationDate] = useState<Date | null>(new Date());
  const [signUpError, setSignUpError] = useState("");
  const { setBoardName, setPassword: setStorePassword, setGraduatedAt } = useUserInfo();
  const signUp = useSignUp();

  const handleDateChange = (date: Date | null) => {
    if (date) setGraduationDate(date);
  };

  const handleSubmit = async () => {
    setSignUpError(""); 
    if (!id){
      setSignUpError("닉네임을 입력해주세요");
      return;
    }
    if (!password) {
      setSignUpError("비밀번호는 ")
    }
    if (!graduationDate) {
      setSignUpError("졸업 날짜를 선택해주세요!");
      return;
    }
    try{

      setBoardName(id);
      setStorePassword(password);
      setGraduatedAt(graduationDate.toISOString().split('T')[0]);

      console.log('데이터 저장 완료:', {id, password, graduationDate});

      await signUp(id, password);
      console.log(id, password, graduationDate);
    } catch (error) {
      console.log("회원가입 중 오류 발생:", error);
    }

  };

  return (
    <SignUpFormBox>
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
      <TextFieldContainer>
        <StyledDatePickerWrapper>
        졸업 날짜:
          <DatePicker
            selected={graduationDate}
            onChange={(date: Date | null) => handleDateChange(date)}
            placeholderText="졸업 날짜를 선택하세요"
            dateFormat="yyyy-MM-dd"
          />
        </StyledDatePickerWrapper>
      </TextFieldContainer>
      <SubmitButton onClick={handleSubmit}>
        칠판 만들기
      </SubmitButton>
      {signUpError && <ErrorText>{signUpError}</ErrorText>}
    </SignUpFormBox>
  );
};

const SignUpFormBox = styled.div`
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

const StyledDatePickerWrapper = styled.div`
  .react-datepicker-wrapper {
    width: 100%;
  }
  .react-datepicker__input-container input {
    width: 100%;
    padding: 8px;
    font-size: 16px;
    border: none;
    border-bottom: 2px solid white;
    background: transparent;
    color: white;
    outline: none;
  }
`;

const ErrorText = styled.div`
  color: red;
  font-size: 0.875rem;
  text-align: center;
  margin-top: 8px;
`;

export default SignUpForm;