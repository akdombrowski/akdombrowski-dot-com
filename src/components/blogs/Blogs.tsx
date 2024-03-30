"use client";
import "client-only";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";

export default function Blogs() {
  return (
    <Container maxWidth={false} disableGutters>
      <Grid
        id="blogs-GridContainer"
        container
        columns={24}
        flexWrap="nowrap"
        justifyContent="center"
        alignItems="stretch"
      ></Grid>
    </Container>
  );
}
