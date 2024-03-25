"use client";
import "client-only";

import Link from "next/link";
import Image from "next/image";

import profilePic from "/public/profile_9x16.jpg";
import profilePicR from "/public/profileR_9x16.jpg";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import Hero from "@/components/Hero";
import { LinkedInURL } from "@/social/LinkedIn";

import { useTheme, alpha } from "@mui/material/styles";

export default function Blogs() {
  const theme = useTheme();

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
      </Grid>
    </Container>
  );
}
