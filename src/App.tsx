import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { ThemeProvider } from "@mui/material";
import GlobalStyle from "./utils/GlobalStyles";
import theme from "./utils/theme"

//Pages
import LoginPage from "./pages/Auth/LoginPage";
import SignUpPage from "./pages/Auth/SignUpPage";
import MainPage from "./pages/Main/MainPage";

interface RouteConfig {
  element: JSX.Element;
  path: string;
  private?: boolean;
}

function App(): JSX.Element {
  const routes: RouteConfig[] = [
    {path: "/", element: <MainPage/>},
    {path: "/login", element: <LoginPage/>},
    {path: "/signup", element: <SignUpPage/>}
  ];

  return(
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Container>
        <Routes>
          {
            routes.map((route) =>
              route.private ? (
                <Route
                  key={route.path}
                  path={route.path}
                />
              ) : (
                <Route key={route.path} path={route.path} element={route.element}/>
              )
            )
          }
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  width: 390px;
  height: 844px;
  background-color: white;
`

export default App;