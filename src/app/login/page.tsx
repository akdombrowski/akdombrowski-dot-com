"use client";
import "client-only";

import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export default function Login() {
  return (
    <Grid
      id="login-gridContainer"
      container
      columns={12}
      rowSpacing={6}
      justifyContent="center"
      alignItems="stretch"
    >
      <Grid
        xs={12}
        display="flex"
        justifyContent="center"
        alignItems="center"
        pb={5}
      >
        <Typography variant="h1" textAlign="center" color="text.secondary">
          Login
        </Typography>
      </Grid>
      <Grid xs flexBasis="33%" flexShrink={1} flexGrow={0} />
      <Grid
        xs="auto"
        flexGrow={10}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Button
          variant="contained"
          color="primary"
          component={Link}
          href="/login/siwe"
        >
          Sign in with Etherum
        </Button>
      </Grid>{" "}
      <Grid xs flexBasis="33%" flexShrink={1} flexGrow={0} />
      <Grid xs flexBasis="33%" flexShrink={1} flexGrow={0} />
      <Grid
        xs="auto"
        flexGrow={10}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Button
          variant="contained"
          color="primary"
          component={Link}
          href="/api/auth/signin/google"
        >
          Google
        </Button>
      </Grid>
      <Grid xs flexBasis="33%" flexShrink={1} flexGrow={0} />
    </Grid>
  );
}
