"use client";
import "client-only";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";

export default function LoadingVideo() {
  return (
    <Grid
      container
      display="flex"
      justifyContent="center"
      alignItems="stretch"
    >
      <Grid
        size={{xs: 12}}
        container
        display="flex"
        justifyContent="center"
        alignItems="stretch"
      >
        <Typography>Wait for it...</Typography>
      </Grid>
    </Grid>
  );
}
