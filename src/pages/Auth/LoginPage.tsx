import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import backgroundImg from "../../assets/background.png";

const LoginPage: React.FC = () => {
	return (
		<LoginContainer>
			<Header>
        <Subtitle>당신에게 전 어떤 친구였나요?</Subtitle>
        <Title>추억의 칠판</Title>
			</Header>
			<LoginForm />
			<Footer>
				<StyledLink to="/findid">칠판을 만들고 싶나요? 회원가입하러 가기</StyledLink>
			</Footer>
		</LoginContainer>
	);
};

// Styled Components
const LoginContainer = styled.div`
  height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;

    background-image: url(${backgroundImg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

const Header = styled.div`
  margin: 100px;
    text-align: center;
`;

const Title = styled.h1`  
  font-size: 36px;
  font-weight: bold;
  color: #ffa726; /* 제목 색상 */
  margin: 10px 0;
`;

const Subtitle = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #6b6b6b;
`;


const Footer = styled.div`
    font-size: 15px;
    text-align: center;
    margin-top: 20px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    margin: 0 5px;
    color: white;
`;

export default LoginPage;