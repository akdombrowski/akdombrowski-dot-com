import type { Metadata } from "next";
import type { ReactNode } from "react";

// import styles for fonts
import "@fontsource/roboto/100.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";
import "@fontsource/roboto/package.json";

/**
 *  Styling for MUI components using theme
 */
import theme from "@/styles";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
// nextjs optimization
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

import AppAppBar from "@/components/appbar/AppAppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";

// vercel site performance and analytics
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Anthony Dombrowski's Portfolio",
  description:
    "Professional Resume Portfolio and Content Library for Anthony Dombrowski. Product Manager and Developer Advocate. ",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/anthonyProfilesq/favicon.ico"
          sizes="any"
        />
      </head>
      <GoogleTagManager gtmId="GTM-MJZSL46" />
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
          <CssBaseline />
            <AppAppBar />
            <Container
              id="mainLayoutContainer"
              maxWidth={false}
              disableGutters
              sx={{ minHeight: "100vh" }}
            >
              <Toolbar
                variant="dense"
                sx={{ minHeight: 55 }}
              />
              {children}
            </Container>
            <SpeedInsights />
            <Analytics />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
