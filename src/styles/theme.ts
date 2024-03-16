"use client";
import "client-only";

import { createTheme, responsiveFontSizes, alpha } from "@mui/material/styles";
import type { CSSProperties } from "react";
import type { TypographyStyleOptions } from "@mui/material/styles/createTypography";

// import { Roboto } from "next/font/google";

// const roboto = Roboto({
//   weight: ["300", "400", "500", "700"],
//   subsets: ["latin"],
//   display: "swap",
// });
declare module "@mui/system" {
  interface BreakpointOverrides {
    // Your custom breakpoints
    ateHundo: true;
    // Remove default breakpoints
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    poster: true;
    title: true;
  }
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    poster: CSSProperties & TypographyStyleOptions;
    title: CSSProperties & TypographyStyleOptions;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    poster?: CSSProperties & TypographyStyleOptions;
    title?: CSSProperties & TypographyStyleOptions;
  }

  interface Theme {
    status: {
      danger: string;
    };
    titleColor?: {
      primary?: string;
    };
  }

  interface ThemeOptions {
    status?: {
      danger?: string;
    };
    titleColor?: {
      primary?: string;
    };
  }

  interface Palette {
    custom: Palette["primary"];
  }

  interface PaletteOptions {
    status?: {
      danger?: string;
    };
    custom?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    custom: true;
  }
}

// export const theme = createTheme(themeOptions);

const modifyDefaultsTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      ateHundo: 800,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          // Map the new variant to render a <h1> by default
          // poster: "h1",
          // title: "h1",
        },
      },
    },
  },
  palette: {
    mode: "dark",
    contrastThreshold: 3.5,
    primary: {
      main: "#11115F",
    },
    secondary: {
      main: "#004FFF",
    },
    background: {
      default: "#00001A",
    },
    text: {
      primary: "#66C2E1",
      secondary: "#b5c5d4",
    },
    error: {
      main: "#D64550",
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
    fontWeightLight: 100,
    fontWeightRegular: 500,
    fontWeightMedium: 800,
    fontWeightBold: 1000,
    poster: {
      fontSize: "6rem",
      fontWeight: 1000,
      lineHeight: 1.25,
      color: alpha("#45F0DF", 0.99),
    },
    title: {
      fontWeight: 1000,
      lineHeight: 1.2,
    },
    h1: {
      fontWeight: 1000,
      lineHeight: 1,
      fontSize: "6rem",
    },
    h2: {
      fontSize: "4rem",
      fontWeight: 350,
      lineHeight: 1.0,
    },
    h3: {
      fontWeight: 850,
      fontSize: "3.5rem",
      lineHeight: 1.0,
    },
    h4: {
      fontWeight: 500,
      fontSize: "2rem",
      lineHeight: 1.08,
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
});

export const customColorsTheme = createTheme(modifyDefaultsTheme, {
  // Custom colors created with augmentColor go here
  palette: {
    bgGradient1: modifyDefaultsTheme.palette.augmentColor({
      color: {
        main: alpha("#45F0DF", 0.99),
      },
      name: "bgGradient1",
    }),

    titleColor: modifyDefaultsTheme.palette.augmentColor({
      color: {
        main: alpha("#45F0DF", 0.99),
      },
      name: "bgGradient1",
    }),
  },
});

export const responsiveDefaultFontSizes =
  responsiveFontSizes(customColorsTheme);

responsiveDefaultFontSizes.typography.title = {
  fontSize: "3.0rem",
  [modifyDefaultsTheme.breakpoints.up(600)]: {
    fontSize: "3.25rem",
  },
  [modifyDefaultsTheme.breakpoints.up(700)]: {
    fontSize: "4rem",
  },
  [modifyDefaultsTheme.breakpoints.up("ateHundo")]: {
    fontSize: "4.5rem",
  },
  [modifyDefaultsTheme.breakpoints.up("md")]: {
    fontSize: "5rem",
  },
};

responsiveDefaultFontSizes.typography.poster = {
  "fontSize": "2.5rem",
  "@media (min-width:600px)": {
    fontSize: "3.75rem",
  },
  [modifyDefaultsTheme.breakpoints.up("md")]: {
    fontSize: "6.15rem",
  },
};

export const customTypographyTheme = createTheme(responsiveDefaultFontSizes, {
  typography: {
    title: {
      color: responsiveDefaultFontSizes.titleColor,
    },
  },
});

export const customComponentsTheme = createTheme(customTypographyTheme, {

});

export default customComponentsTheme;
