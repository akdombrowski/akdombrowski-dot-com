"use client";
import "client-only";

import { createTheme, responsiveFontSizes, alpha } from "@mui/material/styles";

import type { CSSProperties } from "react";
import type {
  TypographyStyleOptions,
  Typography,
} from "@mui/material/styles/createTypography";

declare module "@mui/system" {
  interface BreakpointOverrides {
    // Your custom breakpoints
    foreHundo: true;
    phiveHundo: true;
    seisHundo: true;
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
    appBarTitle: true;
    appBarText: true;
    role: true;
    subRole: true;
  }
}

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    // Your custom breakpoints
    foreHundo: true;
    phiveHundo: true;
    seisHundo: true;
    nanaHundo: true;
    ateHundo: true;
    senHundo: true;
  }

  interface TypographyVariants {
    appBarTitle: CSSProperties & TypographyStyleOptions;
    appBarText: CSSProperties & TypographyStyleOptions;
    poster: CSSProperties & TypographyStyleOptions;
    title: CSSProperties & TypographyStyleOptions;
    role: CSSProperties & TypographyStyleOptions;
    subRole: CSSProperties & TypographyStyleOptions;
  }

  interface TypographyVariantsOptions {
    appBarTitle?: CSSProperties & TypographyStyleOptions;
    appBarText?: CSSProperties & TypographyStyleOptions;
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
    violentRed: Palette["primary"];
    divider2: Palette["primary"];
    custom: Palette["primary"];
    paperBgA: Palette["primary"];
    paperBgB: Palette["primary"];
    paperBgC: Palette["primary"];
    paperBgD: Palette["primary"];
  }

  interface PaletteOptions {
    titleColor?: PaletteOptions["primary"];
    violentRed?: PaletteOptions["primary"];
    divider2?: PaletteOptions["primary"];
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
 *
 *
 * Customize and add to Defaults
 *
 */
const modifyDefaultsTheme = createTheme({
  breakpoints: {
    values: {
      foreHundo: 400,
      phiveHundo: 500,
      seisHundo: 600,
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
      main: alpha("#77F9FF", 0.9),
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
    tonalOffset: 0.6,
  },
  typography: {
    fontFamily: "Roboto",
    fontWeightLight: 100,
    fontWeightRegular: 500,
    fontWeightMedium: 800,
    fontWeightBold: 1000,
    appBarTitle: {
      fontSize: "4rem",
      fontWeight: 300,
      lineHeight: 1.0,
    },
    appBarText: {
      fontSize: "3rem",
      fontWeight: 700,
      lineHeight: 1.0,
    },
    poster: {
      fontSize: "2rem",
      fontWeight: 500,
      lineHeight: 1.0,
    },
    title: {
      fontSize: "18rem",
      fontWeight: 1000,
      lineHeight: 1,
    },
    role: {
      fontSize: "3rem",
      fontWeight: 100,
      lineHeight: 1,
    },
    subRole: {
      fontSize: "1rem",
      fontWeight: 100,
      lineHeight: 1,
    },
    h1: {
      fontSize: "12rem",
      fontWeight: 300,
      lineHeight: 1.0,
    },
    h2: {
      fontSize: "9rem",
      fontWeight: 100,
      lineHeight: 1.0,
    },
    h3: {
      fontWeight: 300,
      fontSize: "3.8rem",
      lineHeight: 1.0,
    },
    h4: {
      fontWeight: 400,
      fontSize: "2rem",
      lineHeight: 1.0,
    },
    h5: {
      fontWeight: 100,
      fontSize: "1.75rem",
      lineHeight: 1.0,
    },
    h6: {
      fontWeight: 1000,
      fontSize: "1.5rem",
      lineHeight: 1.0,
    },
    subtitle1: {
      fontWeight: 100,
      lineHeight: 1,
      fontSize: ".85rem",
    },
    subtitle2: {
      fontWeight: 1000,
      lineHeight: 0.5,
      fontSize: "1rem",
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 700,
      lineHeight: 1,
    },
    body2: {
      fontSize: "1rem",
      fontWeight: 100,
      lineHeight: 1,
    },
    button: {
      fontWeight: 1000,
      fontSize: "1.75rem",
      lineHeight: 1,
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
 * Customize and add to Defaults
 *
 *
 *
 */

/**
 *
 *
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
    violentRed: modifyDefaultsTheme.palette.augmentColor({
      color: {
        main: "#F9DC5C",
      },
      name: "violentRed",
    }),
    divider2: modifyDefaultsTheme.palette.augmentColor({
      color: {
        main: "#00001A",
      },
      name: "divider2",
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
    tonalOffset: 0.6,
  },
});
/**
 *
 * Customize Palette
 *
 * with new colors using {augmentColor} to generate color tokens
 *
 *
 *
 */

/**
 *
 *
 *
 * Add "title", a Custom Typography Variant
 *
 * needs to go here to go in customized components
 * which then gets reponsive font sizes
 *
 */
export const customTypographyTheme = createTheme(customColorsTheme, {
  typography: {
    title: {
      color: customColorsTheme.palette.titleColor,
    },
    appBarTitle: {
      color: customColorsTheme.palette.violentRed.main,
    },
    appBarText: {
      color: customColorsTheme.palette.titleColor,
    },
  },
});
/**
 *
 * Add "title", a Custom Typography Variant
 *
 * needs to go here to go in customized components
 * which then gets reponsive font sizes
 *
 *
 *
 */

/**
 *
 *
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
          poster: "h1",
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
 * Customize MUI Components
 *
 *
 *
 */

/**
 *
 * Typography variant names to make responsive font sizes for
 *
 */
const typographyVariants: (keyof Typography)[] = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "subtitle1",
  "subtitle2",
  "body1",
  "body2",
  "button",
  "caption",
  "overline",
  "poster",
  "title",
  "appBarTitle",
  "appBarText",
  "role",
  "subRole",
];
/**
 *
 *
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
  variants: typographyVariants,
});
/**
 *
 * Responsive Font Sizes fn
 *
 *
 *
 */

const theme = responsiveFont;

export default theme;
