import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Unstable_Grid2";
import NextLink from "next/link";
import ProTip from "@/components/ProTip";
import Copyright from "@/components/Copyright";

export default function Home() {
  return (
    <Container maxWidth={false} sx={{ height: "100vh", overflow: "scroll" }}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid xs={12} justifyContent="center" alignItems="center">
          <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
            Material UI - Next.js App Router example in TypeScript
          </Typography>
        </Grid>
        <Grid xs={12} justifyContent="center" alignItems="center">
          <Link href="/about" color="secondary" component={NextLink}>
            Go to the about page
          </Link>
        </Grid>
        <Grid xs={12} justifyContent="center" alignItems="center">
          <ProTip />
        </Grid>
        <Grid xs={12} justifyContent="center" alignItems="center">
          <Copyright />
        </Grid>
      </Grid>
    </Container>
  );
}
