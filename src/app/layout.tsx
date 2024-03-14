import type { Metadata } from "next";
import type { ReactNode } from "react";

// import styles for fonts
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// theme styling for MUI components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/styles/theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

export const metadata: Metadata = {
  title: "Anthony Dombrowski's Portfolio",
  description:
    "A site all about the man, the myth, the legend, the reaper without the creeper, the steeper the beeper, the deeper the peeper, freer than sheer, Anthony Dombrowski. Professional Resume Portfolio. ",
};

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* <AppRouterCacheProvider options={{ enableCssLayer: true }}> */}
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            {props.children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
