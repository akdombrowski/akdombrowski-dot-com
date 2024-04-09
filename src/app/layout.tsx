import type { Metadata } from "next";
import type { ReactNode } from "react";

// import styles for fonts
import "@fontsource/roboto/100.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";

/**
 *  Styling for MUI components using theme
 */
import theme from "@/styles";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
// nextjs optimization
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

import WagmiSessionProvider from "@/wagmi/WagmiProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AppAppBar from "@/components/appbar/AppAppBar";
import Toolbar from "@mui/material/Toolbar";

// vercel site performance and analytics
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Anthony Dombrowski's Portfolio",
  description:
    "Professional Resume Portfolio and Content Library for Anthony Dombrowski. Product Manager and Developer Advocate. ",
};

const queryClient = new QueryClient();

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/anthonyProfilesq/favicon.ico" sizes="any" />
      </head>
      <body>
        <WagmiSessionProvider>
          <QueryClientProvider client={queryClient}>
            <AppRouterCacheProvider>
              <ThemeProvider theme={theme}>
                <CssBaseline />
                <AppAppBar />
                <Toolbar variant="dense" sx={{ minHeight: 45 }} />
                {props.children}
                <SpeedInsights />
                <Analytics />
              </ThemeProvider>
            </AppRouterCacheProvider>
          </QueryClientProvider>
        </WagmiSessionProvider>
      </body>
    </html>
  );
}
