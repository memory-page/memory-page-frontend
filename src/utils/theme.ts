import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "SejongGeulggot, Arial, sans-serif",
    allVariants: {
      fontFamily: "SejongGeulggot, Arial, sans-serif",
    },
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "white", // 라벨 기본 색상
          "&.Mui-focused": {
            color: "white", // 포커스 상태 라벨 색상
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          color: "white", // 입력 텍스트 색상
          backgroundColor: "transparent", // 배경색 투명화
          "&:hover": {
            backgroundColor: "transparent", // 호버 시 배경색 유지
          },
          "&.Mui-focused": {
            backgroundColor: "transparent", // 포커스 시 배경색 유지
          },
        },
        input: {
          color: "white", // 입력 중 텍스트 색상
        },
      },
    },
  },
});

export default theme;