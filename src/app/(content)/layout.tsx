"use client";
import "client-only";

import type { ReactNode } from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";

import { usePathname } from "next/navigation";

import compact from "lodash-es/compact";

// export const metadata: Metadata = {
//   title: "Anthony Dombrowski's Portfolio",
//   description:
//     "Professional Resume Portfolio and Content Library for Anthony Dombrowski. Product Manager and Developer Advocate. ",
// };

export default function Layout(props: { children: ReactNode }) {
  const pathname = usePathname();
  const pathnameArr = compact(pathname.split("/"));

  return (
    <Container
      id="contentpagesLayout-container"
      maxWidth={false}
      style={{ minHeight: "100vh" }}
    >
      <Grid id="contentpagesLayout-gridContainer" container>
        <Grid
          id="contentpagesLayout-pageTitleGridContainer"
          size={{xs: 12}}
          container
          spacing={0}
          mb={3}
          justifyContent="space-around"
          alignItems="stretch"
          sx={{
            backgroundImage: `radial-gradient(circle at center,  rgba(35, 181, 211,0.2) 0, rgba(35, 181, 211,0.05) 45%, rgba(201, 242, 153,0.01) 55%,  rgba(255,255,255,0.0) 70%)`,
          }}
        >
          <Grid size={{xs: 6}} pt={3} pb={2} container>
            <Grid pr={1}>
              <Typography
                variant={pathnameArr.length > 1 ? "h2" : "h1"}
                letterSpacing="2vw"
                align="left"
                textTransform="uppercase"
              >
                {`${pathnameArr.at(0)}`}
              </Typography>
            </Grid>
            <Grid pl={1}>
              <Typography
                variant={pathnameArr.length > 1 ? "h1" : "h2"}
                align="right"
                textTransform="uppercase"
              >
                {pathnameArr.length > 1 ? `${pathnameArr.at(-1)}` : ""}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            size={{xs: 6}}
            container
            spacing={1}
            justifyContent="center"
            alignItems="center"
            sx={{
              backgroundImage: ` linear-gradient(to left, rgba(255, 75, 200, 0.01) 0, rgba(255, 75, 250, 0.08) 20%, rgba(255, 105, 250, 0.14) 50%, rgba(255, 25, 225, 0.08) 80%,  rgba(35, 181, 211, 0.0) 100%)`,
            }}
          >
            <Box
              p={3}
              sx={{
                backgroundImage: `radial-gradient(circle at center, rgba(255, 75, 200, 0.01) 0,  rgba(0, 0, 0, 0.02) 100%)`,
              }}
            >
              <Grid size={{xs: 12}} p={0} pb={1}>
                <Typography variant="h3" align="center" letterSpacing=".55vw">
                  Content
                </Typography>
              </Grid>
              <Grid size={{xs: 12}} p={0}>
                <Typography variant="h3" align="center" letterSpacing=".55vw">
                  Library
                </Typography>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        <Grid
          id="contentpagesLayout-bodyGridContainer"
          size={{xs: 12}}
          container
          spacing={0}
          justifyContent="center"
          alignItems="stretch"
        >
          {props.children}
        </Grid>
      </Grid>
    </Container>
  );
}
