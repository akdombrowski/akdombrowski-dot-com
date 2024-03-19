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
    foreHundo: true;
    phiveHundo: true;
    nanaHundo: true;
    ateHundo: true;
    senHundo: true;
    // default breakpoints
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    fhd: true;
    uhd: true;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    poster: true;
    title: true;
    role: true;
    subRole: true;
  }
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    poster: CSSProperties & TypographyStyleOptions;
    title: CSSProperties & TypographyStyleOptions;
    role: CSSProperties & TypographyStyleOptions;
    subRole: CSSProperties & TypographyStyleOptions;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    poster?: CSSProperties & TypographyStyleOptions;
    title?: CSSProperties & TypographyStyleOptions;
    role?: CSSProperties & TypographyStyleOptions;
    subRole?: CSSProperties & TypographyStyleOptions;
  }

  interface Theme {
    status: {
      danger: string;
    };
  }

  interface ThemeOptions {
    status?: {
      danger?: string;
    };
    paperBackground?: {
      colorA?: string;
      colorB?: string;
      colorC?: string;
      colorD?: string;
    };
  }

  interface Palette {
    titleColor: Palette["primary"];
    custom: Palette["primary"];
    paperBgA: Palette["primary"];
    paperBgB: Palette["primary"];
    paperBgC: Palette["primary"];
    paperBgD: Palette["primary"];
  }

  interface PaletteOptions {
    titleColor?: PaletteOptions["primary"];
    custom?: PaletteOptions["primary"];
    paperBgA?: PaletteOptions["primary"];
    paperBgB?: PaletteOptions["primary"];
    paperBgC?: PaletteOptions["primary"];
    paperBgD?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    custom: true;
  }
}

/**
 *
 * Customize Defaults + Define New Ones
 *
 */
const modifyDefaultsTheme = createTheme({
  breakpoints: {
    values: {
      foreHundo: 400,
      phiveHundo: 500,
      // sm: 600
      nanaHundo: 700,
      ateHundo: 800,
      senHundo: 1000,
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      fhd: 1920,
      uhd: 3840,
    },
  },

  palette: {
    mode: "dark",
    primary: {
      main: "#11115F",
    },
    secondary: {
      main: alpha("#fff", 0.1),
    },
    background: {
      default: "#00001A",
    },
    text: {
      primary: "#93BDBA",
    },
    error: {
      main: "#D64550",
    },
    divider: alpha("#00001A", 0.99),
    success: {
      main: "#63A375",
    },
    info: {
      main: "#BBD686",
    },
    tonalOffset: 0.9,
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
      lineHeight: 1,
    },
    subRole: {
      fontSize: ".75rem",
      fontWeight: 100,
      lineHeight: 1,
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
      fontWeight: 300,
      fontSize: "3.5rem",
      lineHeight: 1.0,
    },
    h4: {
      fontWeight: 400,
      fontSize: "1.6rem",
      lineHeight: 1,
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

/**
 *
 * Customize Palette
 *
 * with new colors using {augmentColor} to generate color tokens
 *
 */
export const customColorsTheme = createTheme(modifyDefaultsTheme, {
  // Custom colors created with augmentColor go here
  palette: {
    titleColor: modifyDefaultsTheme.palette.augmentColor({
      color: {
        main: "#52FFB8",
      },
      name: "titleColor",
    }),

    paperBgA: modifyDefaultsTheme.palette.augmentColor({
      color: {
        main: alpha("#08203E", 0.8),
      },
      name: "paperBgA",
    }),
    paperBgB: modifyDefaultsTheme.palette.augmentColor({
      color: {
        main: alpha("#250404", 0.8),
      },
      name: "paperBgB",
    }),
    paperBgC: modifyDefaultsTheme.palette.augmentColor({
      color: {
        main: alpha("#0D0029", 0.8),
      },
      name: "paperBgC",
    }),
    paperBgD: modifyDefaultsTheme.palette.augmentColor({
      color: {
        main: alpha("#191A0F", 0.8),
      },
      name: "paperBgD",
    }),
    tonalOffset: 0.9,
  },
});

/**
 *
 * Add Custom Typography Variant
 *
 */
export const customTypographyTheme = createTheme(customColorsTheme, {
  typography: {
    title: {
      color: customColorsTheme.palette.titleColor,
    },
  },
});

/**
 *
 * Customize MUI Components
 *
 */
export const customComponentsTheme = createTheme(customTypographyTheme, {
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          // Map the new variant to render a <h1> by default
          // poster: "h1",
          title: "h1",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(
            customTypographyTheme.palette.background.default,
            0.5,
          ),
          backgroundImage: `linear-gradient(to right bottom, ${alpha(
            customTypographyTheme.palette.paperBgA.dark,
            0.1,
          )}, ${alpha(customTypographyTheme.palette.paperBgA.dark, 0.1)} 50%)`,
        },
      },
    },
  },
});

/**
 *
 * Responsive Font Sizes fn
 *
 */
export const responsiveFont = responsiveFontSizes(customComponentsTheme, {
  breakpoints: [
    "foreHundo",
    "phiveHundo",
    "nanaHundo",
    "ateHundo",
    "senHundo",
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "fhd",
    "uhd",
  ],
  factor: 10,
});


/**
 *
 * CUSTOM Typography Variant
 *
 * title
 */
responsiveFont.typography.title = {
  fontSize: "1.5rem",
  fontWeight: 1000,
  lineHeight: 1,
  [customComponentsTheme.breakpoints.up(400)]: {
    fontSize: "2rem",
  },
  [customComponentsTheme.breakpoints.up(500)]: {
    fontSize: "2.4rem",
  },
  [customComponentsTheme.breakpoints.up(600)]: {
    fontSize: "2.71rem",
  },
  [customComponentsTheme.breakpoints.up(700)]: {
    fontSize: "3.2rem",
  },
  [customComponentsTheme.breakpoints.up("ateHundo")]: {
    fontSize: "3.5rem",
  },
  [customComponentsTheme.breakpoints.up("md")]: {
    fontSize: "4.75rem",
  },
  [customComponentsTheme.breakpoints.up("lg")]: {
    fontSize: "6rem",
  },
  [customComponentsTheme.breakpoints.up("xl")]: {
    fontSize: "7.1rem",
  },
  [customComponentsTheme.breakpoints.up("fhd")]: {
    fontSize: "8rem",
  },
  [customComponentsTheme.breakpoints.up("uhd")]: {
    fontSize: "15rem",
  },
};

/**
 * CUSTOM Typography Variant
 *
 * role
 */
responsiveFont.typography.role = {
  fontSize: ".5rem",
  fontWeight: 100,
  lineHeight: 1,
  [customComponentsTheme.breakpoints.up(400)]: {
    fontSize: ".7rem",
  },
  [customComponentsTheme.breakpoints.up(500)]: {
    fontSize: ".9rem",
    fontWeight: 200,
  },
  [customComponentsTheme.breakpoints.up(600)]: {
    fontSize: "1rem",
    fontWeight: 300,
  },
  [customComponentsTheme.breakpoints.up(700)]: {
    fontSize: "1.25rem",
    fontWeight: 400,
  },
  [customComponentsTheme.breakpoints.up("ateHundo")]: {
    fontSize: "1.5rem",
  },
  [customComponentsTheme.breakpoints.up("md")]: {
    fontSize: "1.65rem",
  },
};

/**
 * CUSTOM Typography Variant
 *
 * subRole
 */
responsiveFont.typography.subRole = {
  fontSize: ".4rem",
  fontWeight: 100,
  lineHeight: 1,
  [customComponentsTheme.breakpoints.up(400)]: {
    fontSize: ".5rem",
  },
  [customComponentsTheme.breakpoints.up(500)]: {
    fontSize: ".7rem",
  },
  [customComponentsTheme.breakpoints.up(600)]: {
    fontSize: ".8rem",
  },
  [customComponentsTheme.breakpoints.up(700)]: {
    fontSize: ".9rem",
  },
  [customComponentsTheme.breakpoints.up("ateHundo")]: {
    fontSize: "1rem",
  },
  [customComponentsTheme.breakpoints.up("md")]: {
    fontSize: "1.2rem",
    fontWeight: 300,
  },
};

/**
 * CUSTOM Typography Variant
 *
 * poster
 */
responsiveFont.typography.poster = {
  "fontSize": "2.5rem",
  "@media (min-width:600px)": {
    fontSize: "3.75rem",
  },
  [customComponentsTheme.breakpoints.up("md")]: {
    fontSize: "4.15rem",
  },
};

const theme = responsiveFont;

export default theme;
