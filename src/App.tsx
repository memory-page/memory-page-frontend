import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeProvider } from '@mui/material';
import GlobalStyle from './utils/GlobalStyles';
import theme from './utils/theme';

//Pages
import LoginPage from './pages/Auth/LoginPage';
import SignUpPage from './pages/Auth/SignUpPage';
import MainPage from './pages/Main/MainPage';
import SharePage from './pages/Share/SharePage';
import CreatePage from './pages/Board/CreatePage';
import MyPage from './pages/Board/MyPage';
import BoardPage from './pages/Board/components/BoardPage';
import useUserInfo from './store/UserInfo';

interface RouteConfig {
  element: JSX.Element;
  path: string;
  private?: boolean;
}

function App(): JSX.Element {
  const { id } = useUserInfo();

  const routes: RouteConfig[] = [
    { path: '/', element: <MainPage /> },
    { path: '/login', element: <LoginPage /> },
    { path: '/signup', element: <SignUpPage /> },
    { path: '/share', element: <SharePage /> },
    { path: '/board/create', element: <CreatePage /> },
    { path: `/board/${id}`, element: <MyPage/> },
  ];

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Routes>
          {routes.map((route) =>
            route.private ? (
              <Route key={route.path} path={route.path} />
            ) : (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            )
          )}
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  width: 390px;
  height: 844px;
  background-color: white;
`;

export default App;
