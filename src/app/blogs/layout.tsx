import type { Metadata } from "next";
import type { ReactNode } from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";

import Hero from "@/components/Hero";
export const metadata: Metadata = {
  title: "Anthony Dombrowski's Portfolio",
  description:
    "Professional Resume Portfolio and Content Library for Anthony Dombrowski. Product Manager and Developer Advocate. ",
};

export default function Layout(props: { children: ReactNode }) {
  return (
    <Container id="blogsLayout" maxWidth={false}>
      <Grid id="blogsLayout-gridContainer" container columns={12} rowSpacing={3} justifyContent="center" alignItems="stretch">
        <Grid id="blogsLayout-blogsTitleGrid" xs={12}>
          <Box
            py={2}
            display="flex"
            justifyContent="center"
            alignItems="stretch"
          >
            <Typography variant="h1">Blogs</Typography>
          </Box>
        </Grid>
        <Grid id="blogsLayout-childrenGrid" xs={12} justifyContent="center" alignItems="stretch">
          {props.children}
        </Grid>
      </Grid>
    </Container>
  );
}
