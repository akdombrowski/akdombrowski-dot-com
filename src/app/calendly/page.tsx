"use client";

import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import { auth, signIn } from "@/auth";

export default function CalendlyPage() {
  return (
    <Container maxWidth={false}>
      <Grid
        id="calendly-GridContainer"
        container
        display="flex"
        justifyContent="center"
        alignItems="center"
        paddingX={0}
      >
        <Grid
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography>Login to see your embedded calendar link</Typography>
        </Grid>
        <Grid
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Button
            variant="contained"
            sx={{ p: 2, pt: 3 }}
            onClick={() => signIn("Calendly")}
          >
            <Typography
              textTransform="lowercase"
              sx={{ my: "auto" }}
            >
              Login with Calendly
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
