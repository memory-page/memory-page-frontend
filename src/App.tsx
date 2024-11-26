import { Routes, Route, Navigate } from "react-router-dom";
import styled from "styled-components";
import { createTheme, ThemeProvider } from "@mui/material";
import LoginPage from "./pages/Auth/LoginPage";

const theme = createTheme({
  typography: {
    fontFamily: "Moneygraphy-Rounded",
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "white", // 기본 색상
          "&.Mui-focused": {
            color: "white", // 포커스 상태에서 흰색으로 변경
          },
        },
      },
    },
  },
});

interface RouteConfig {
  element: JSX.Element;
  path: string;
  private?: boolean;
}

function App(): JSX.Element {
  const routes: RouteConfig[] = [
    {path: "/", element: <LoginPage/>},
  ];

  return(
    <ThemeProvider theme={theme}>
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