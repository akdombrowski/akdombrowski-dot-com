"use client";
import "client-only";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";

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
    <Container maxWidth={false}>
      <AppAppBar />
      <Hero />
      <Box>
        <LogoCollection />
        <Features />
        <Divider />
        <Testimonials />
        <Divider />
        <Highlights />
        <Divider />
        <Pricing />
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
      </Box>
    </Container>
  );
}
