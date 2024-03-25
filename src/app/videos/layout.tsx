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
    <Container id="videosLayout" disableGutters maxWidth={false}>
      <Grid
        id="videosLayout-grid"
        container
        rowSpacing={{ xs: 1, sm: 2, md: 3 }}
        disableEqualOverflow
      >
        <Grid id="blogsLayout-blogsTitleGrid" xs={12}>
          <Box
            display="flex"
            justifyContent="space-around"
            alignItems="stretch"
            width="100%"
            py={2}
            sx={{
              backgroundImage: `radial-gradient(circle at center,  rgba(35, 181, 211,0.2) 0, rgba(35, 181, 211,0.05) 45%, rgba(201, 242, 153,0.01) 55%,  rgba(255,255,255,0.0) 70%)`,
            }}
          >
            <Grid container columns={12} rowSpacing={1}>
              <Grid xs={12} display="flex" justifyContent="space-around">
                <Typography
                  variant="h2"
                  fontWeight={100}
                  align="center"
                  letterSpacing="2vw"
                  // justifyContent="center"
                  // alignItems="flex-end"
                >
                  Content
                </Typography>
                <Typography
                  variant="h2"
                  component="span"
                  display="inline-flex"
                  fontWeight={100}
                  align="center"
                  letterSpacing="2vw"
                  justifyContent="center"
                  alignItems="flex-end"
                >
                  Library
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid
          id="videosLayout-videosComponentGrid"
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
          paddingX={0}
        >
          <Videos />
        </Grid>
        {props.children}
      </Grid>
    </Container>
  );
}
