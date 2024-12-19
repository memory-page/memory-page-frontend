import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import bg0 from '../../assets/background/bg-0.png';
import Title from '../../components/Title';

const LoginPage: React.FC = () => {
  return (
    <LoginContainer>
      <Title />
      <LoginForm />
      <Footer>
        <StyledLink to='/signup'>
          칠판을 만들고 싶나요? 회원가입하러 가기
        </StyledLink>
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

  background-image: url(${bg0});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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
