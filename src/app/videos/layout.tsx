import type { Metadata } from "next";
import type { ReactNode } from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";

import Hero from "@/components/Hero";
// export const metadata: Metadata = {
//   title: "Anthony Dombrowski's Portfolio",
//   description:
//     "Professional Resume Portfolio and Content Library for Anthony Dombrowski. Product Manager and Developer Advocate. ",
// };

export default function Layout(props: { children: ReactNode }) {
  return (
    <Container id="videosPage" disableGutters maxWidth={false}>
      <Grid
        id="videos-grid"
        container
        rowSpacing={{ xs: 1, sm: 2, md: 3 }}
        disableEqualOverflow
      >
        <Grid
          id="videos-heroGridWrapper"
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
          pt={{ xs: 0.5, seisHundo: 1.5, md: 2 }}
        >
          <Hero text="Videos" variant="h1" />
        </Grid>
        {props.children}
      </Grid>
    </Container>
  );
}
