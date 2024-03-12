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

// export const theme = createTheme(themeOptions);

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#11115F",
      contrastText: "#f3f7e5",
    },
    secondary: {
      main: "#004FFF",
      contrastText: "#f3e28f",
    },
    background: {
      // default: "#00001A",
      default: "#00001A",
    },
    text: {
      primary: "#f0e2e9",
      secondary: "#e5e5e5",
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
    fontFamily: "Roboto",
    fontWeightBold: 1000,
    fontWeightMedium: 700,
    h1: {
      fontWeight: 1000,
      lineHeight: 1.0,
      fontSize: "6rem",
    },
    h2: {
      fontSize: "4rem",
      fontWeight: 900,
      lineHeight: 1.0,
    },
    h3: {
      fontWeight: 850,
      fontSize: "3rem",
    },
    h4: {
      fontWeight: 500,
      fontSize: "1.15rem",
      lineHeight: 1.0,
    },
    h5: {
      fontWeight: 100,
      fontSize: ".75rem",
    },
    h6: {
      fontWeight: 1000,
      fontSize: ".5rem",
      lineHeight: 1.0,
    },
    subtitle1: {
      fontWeight: 100,
      lineHeight: 1,
      fontSize: "0.9rem",
    },
    subtitle2: {
      fontWeight: 1000,
      lineHeight: 0.5,
      fontSize: ".75rem",
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 500,
      lineHeight: 1,
    },
    body2: {
      fontSize: "0.9rem",
      fontWeight: 100,
      lineHeight: 1,
    },
    button: {
      fontWeight: 1000,
      fontSize: ".9rem",
      lineHeight: 1.2,
    },
    caption: {
      fontWeight: 100,
      fontSize: ".8rem",
      lineHeight: 1.1,
    },
    overline: {
      fontWeight: 100,
      fontSize: ".95rem",
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
