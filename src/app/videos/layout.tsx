import type { Metadata } from "next";
import type { ReactNode } from "react";


import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";

import Hero from "@/components/Hero"
export const metadata: Metadata = {
  title: "Anthony Dombrowski's Portfolio",
  description:
    "Professional Resume Portfolio and Content Library for Anthony Dombrowski. Product Manager and Developer Advocate. ",
};

export default function Layout(props: { children: ReactNode }) {
  return (
  <Container maxWidth={false} disableGutters>
      <Grid
        id="blogs-GridContainer"
        container
        columns={24}
        flexWrap="nowrap"
        justifyContent="center"
        alignItems="stretch"
      >
          <Grid
            id="blogs-pageTitle"
            xs={12}
            display="flex"
            justifyContent="center"
            alignItems="center"
            paddingTop="2rem"
          >
            <Hero title="Blog" />
        </Grid>
      </Grid>
      </Container>
  );
}
