import type { Metadata } from "next";
import type { ReactNode } from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";

import Hero from "@/components/Hero";
import Videos from "@/components/videos/Videos";
// export const metadata: Metadata = {
//   title: "Anthony Dombrowski's Portfolio",
//   description:
//     "Professional Resume Portfolio and Content Library for Anthony Dombrowski. Product Manager and Developer Advocate. ",
// };

export default function Layout(props: { children: ReactNode }) {
  return (
    <Container id="videosLayout-container" maxWidth={false}>
      <Grid id="videosLayout-gridContainer" container spacing={1}>
        {/* <Grid id="videosLayout-videosTitleGrid" xs={12}>
          <Box
            id="videosLayout-pageTitleBox"
            display="flex"
            justifyContent="space-around"
            alignItems="stretch"
            width="100%"
            py={2}
            sx={{
              backgroundImage: `radial-gradient(circle at center,  rgba(35, 181, 211,0.2) 0, rgba(35, 181, 211,0.05) 45%, rgba(201, 242, 153,0.01) 55%,  rgba(255,255,255,0.0) 70%)`,
            }}
          > */}
        <Grid
          id="videosLayout-pageTitleGridContainer"
          xs={12}
          container
          spacing={0}
          justifyContent="space-around"
          alignItems="stretch"
          sx={{
            backgroundImage: `radial-gradient(circle at center,  rgba(35, 181, 211,0.2) 0, rgba(35, 181, 211,0.05) 45%, rgba(201, 242, 153,0.01) 55%,  rgba(255,255,255,0.0) 70%)`,
          }}
        >
          <Grid xs={6} pt={3} pb={2}>
            <Typography variant="h1" align="center" letterSpacing="2vw">
              Videos
            </Typography>
          </Grid>
          <Grid
            xs={6}
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
              <Grid xs={12} p={0} pb={1}>
                <Typography variant="h3" align="center" letterSpacing=".55vw">
                  Content
                </Typography>
              </Grid>
              <Grid xs={12} p={0}>
                <Typography variant="h3" align="center" letterSpacing=".55vw">
                  Library
                </Typography>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        {/* </Box> */}
        {/*        </Grid> */}

        {props.children}
      </Grid>
    </Container>
  );
}
