"use client";

import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";

export default function VideosErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
  }) {
  console.error(error);

  return (
    <Container
      id="errorPage"
      maxWidth={false}
      disableGutters
    >
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        pt={2}
      >
        <Grid
          size={{xs: 12}}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h4">Hey!</Typography>
        </Grid>
        <Grid
          size={{xs: 12}}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h4">What&apos;s that over there 👉?!?!?!</Typography>
        </Grid>

        <Grid
          size={{xs: 12}}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h4">Oh, you just missed it!</Typography>
        </Grid>
        <Grid
          size={{xs: 12}}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h4">Wait!</Typography>
        </Grid>
        <Grid
          size={{xs: 12}}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h4">Now, it&apos;s over there 👈 !!</Typography>
        </Grid>
        <Grid
          size={{xs: 12}}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Button
            variant="outlined"
            onClick={() => reset()}
          >
            <Typography
              variant="subtitle2"
              color="cyan"
            >
              If you just want to go back, then click me...
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
