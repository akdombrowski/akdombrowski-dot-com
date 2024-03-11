"use client";
import "client-only";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import Grid from "@mui/material/Unstable_Grid2";

import AppAppBar from "@/components/AppAppBar";
import Hero from "@/components/Hero";
import LogoCollection from "@/components/LogoCollection";
import Highlights from "@/components/Highlights";
import Pricing from "@/components/Pricing";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

import { useTheme, alpha } from "@mui/material/styles";
export default function LandingPage() {
  const theme = useTheme();
  const bgColor = alpha(theme.palette.primary.light, 0.01);
  const bgColorMid = alpha(theme.palette.primary.light, 0.05);
  const bgColorEnd = alpha(theme.palette.primary.light, 1);
  return (
    <Container id="landingPage" maxWidth={false}>
      <AppAppBar />
      <Grid id="landingPage-grid" container spacing={3}>
        <Grid
          id="hero"
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
          paddingTop="3rem">
          <Hero />
        </Grid>
        <Grid
          id="logos"
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center">
          <LogoCollection />
        </Grid>
        <Grid
          id="features"
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center">
          <Features />
        </Grid>
        <Divider />
        <Grid
          id="testimonials"
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center">
          <Testimonials />
        </Grid>
        <Divider />
        <Grid
          id="highlights"
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center">
          <Highlights />
        </Grid>
        <Divider />
        <Grid
          id="highlights"
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center">
          <Pricing />
        </Grid>
        <Divider />

        <Grid
          id="highlights"
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center">
          <FAQ />
        </Grid>

        <Divider />
        <Grid
          id="highlights"
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center">
          <Footer />
        </Grid>

        <Grid
          id="highlights"
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"></Grid>

        <Grid
          id="highlights"
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"></Grid>
      </Grid>
    </Container>
  );
}
