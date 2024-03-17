"use client";
import "client-only";

import Link from "next/link";
import Image from "next/image";

import profilePic from "/public/profile.jpg";
import profilePicR from "/public/profileR.jpg";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { LinkedInURL } from "@/social/LinkedIn";

export default function Hero() {
  return (
    <Container
      component={Link}
      href={LinkedInURL}
      maxWidth={false}
      disableGutters
    >
      <Grid
        id="heroGridContainer"
        container
        columns={12}
        flexWrap="nowrap"
        justifyContent="center"
        alignItems="stretch"
      >
        <Grid id="leftHeroPicGridItem" xs={2} padding={0}>
          <Box width="100%" height="100%" position="relative">
            <Image
              id="leftHeroPic"
              src={profilePic}
              quality={100}
              placeholder="blur"
              style={{
                objectFit: "cover",
                objectPosition: "55% 10%",
                opacity: "60%",
              }}
              fill
              priority
              alt="anthony dombrowski profile pic"
            />
          </Box>
        </Grid>
        <Grid
          id="hero-spacer"
          xs={1}
          display="flex"
          justifyContent="left"
          alignItems="stretch"
        ></Grid>
        <Grid
          id="heroTitleGridItem"
          flexBasis="min-content"
          flexGrow={1}
          display="flex"
          justifyContent="center"
          alignItems="stretch"
        >
          <Box
            display="flex"
            flexBasis="min-content"
            justifyContent="center"
            alignItems="stretch"
            paddingX={5}
          >
            <Typography variant="title" align="center" color="text.light">
              Anthony Dombrowski
            </Typography>
          </Box>
        </Grid>
        <Grid
          id="hero-linkedin"
          xs={1}
          display="flex"
          justifyContent="left"
          alignItems="stretch"
        >
          <Box mt="auto">
            <LinkedInIcon
              sx={{
                width: "100%",
                height: "100%",
              }}
            />
          </Box>
        </Grid>

        <Grid id="rightHeroPicGridItem" xs={0} md={2} padding={0}>
          <Box height="100%" position="relative">
            <Image
              id="rightHeroPic"
              src={profilePicR}
              quality={100}
              placeholder="blur"
              style={{
                objectFit: "cover",
                objectPosition: "55% 10%",
                opacity: "60%",
              }}
              fill
              priority
              alt="anthony dombrowski profile pic"
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
