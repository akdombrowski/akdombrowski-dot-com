"use client";
import "client-only";

import {
  type ThemeOptions,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import { type PaletteMode } from "@mui/material";

// import { Roboto } from "next/font/google";

// const roboto = Roboto({
//   weight: ["300", "400", "500", "700"],
//   subsets: ["latin"],
//   display: "swap",
// });
declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#badefe",
            contrastText: "#ec562c",
          },
          secondary: {
            main: "#001fab",
            contrastText: "#f3e28f",
          },
          background: {
            main: "#080708",
            default: "#080708",
          },
          text: {
            primary: "#cae9ff",
          },
          error: {
            main: "#b86f52",
          },
          divider: "#4c0000",
        }
      : {
          primary: {
            main: "#badefe",
            contrastText: "#ec562c",
          },
          secondary: {
            main: "#001fab",
            contrastText: "#f3e28f",
          },
          background: {
            main: "#080708",
            default: "#080708",
          },
          text: {
            primary: "#cae9ff",
          },
          error: {
            main: "#b86f52",
          },
          divider: "#4c0000",
        }),
  },
});

export const themeOptions: ThemeOptions = getDesignTokens("dark");
// export const theme = createTheme(themeOptions);

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#badefe",
      contrastText: "#ec562c",
    },
    secondary: {
      main: "#004FFF",
      contrastText: "#f3e28f",
    },
    background: {
      default: "#00001A",
    },
    text: {
      primary: "#85FF9E",
      secondary: "#282A2F",
    },
    error: {
      main: "#EF6F6C",
    },
    divider: "#4dd0e1",
    success: {
      main: "#63A375",
      contrastText: "#9EE37D",
    },
    info: {
      main: "#BBD686",
    },
  },
  typography: {
    // fontFamily: "Roboto",

    fontWeightBold: 1000,
    fontWeightMedium: 700,
    h1: {
      fontWeight: 1000,
      lineHeight: 1.0,
      fontSize: "10rem",
    },
    h2: {
      fontSize: "10rem",
      fontWeight: 500,
      lineHeight: 1.0,
    },
    h3: {
      fontWeight: 400,
      fontSize: "8rem",
    },
    h4: {
      fontWeight: 100,
      fontSize: "7rem",
      lineHeight: 1.0,
    },
    h5: {
      fontWeight: 100,
      fontSize: "5rem",
    },
    h6: {
      fontWeight: 1000,
      fontSize: "2rem",
      lineHeight: 1.0,
    },
    subtitle2: {
      fontWeight: 1000,
      lineHeight: 0.5,
      fontSize: "1.1rem",
    },
    subtitle1: {
      fontWeight: 100,
      lineHeight: 1,
      fontSize: "0.5rem",
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 500,
      lineHeight: 1.0,
    },
    body2: {
      fontSize: "1rem",
      fontWeight: 100,
      lineHeight: 1.0,
    },
    button: {
      fontWeight: 1000,
      fontSize: "1rem",
      lineHeight: 2.08,
    },
    caption: {
      fontWeight: 600,
      fontSize: "2rem",
    },
    overline: {
      fontWeight: 100,
      fontSize: "2rem",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (themeParam) => `
        h1 {
          color: ${themeParam.palette.success.main};
        }
      `,
    },
  },
});

export default responsiveFontSizes(theme);
