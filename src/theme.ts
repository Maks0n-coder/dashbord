import { createTheme } from "@mui/material/styles";

export const drawerWidth = 240;

const theme = createTheme({
  palette: {
    primary: {
      main: "#08090e", // Используем --black для основного цвета
    },
    secondary: {
      main: "#cc102b", // Используем --red для вторичного цвета
    },
    background: {
      default: "#fff", // Используем --white для фона
    },
    text: {
      primary: "#08090e", // Используем --black для основного текста
    },
  },
  typography: {
    fontFamily: '"Play", sans-serif', // Используем ваш шрифт
    fontSize: 18, // Устанавливаем базовый размер шрифта
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        html {
          box-sizing: border-box;
          scroll-behavior: smooth;
        }

        *,
        *::before,
        *::after {
          box-sizing: inherit;
        }

        body {
          font-family: "Play", sans-serif;
          font-weight: 400;
          font-size: 18px;
          background-color: #fff;
          color: #08090e;
        }

        a {
          color: inherit;
          text-decoration: none;
          transition: 0.3s ease-in-out;
        }

        img {
          width: 100%;
        }

        svg,
        path,
        rect {
          display: block;
          transition: 0.3s ease-in-out;
        }

        input {
          border: none;
          transition: 0.3s ease-in-out;
        }

        ul {
          margin: 0;
          padding: 0;
          list-style: none;
        }

        button {
          padding: 0;
          border: none;
          background-color: transparent;
          cursor: pointer;
        }
      `,
    },
  },
});

export default theme;
