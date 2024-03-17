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

import { LinkedInURL } from "@/social/LinkedIn";

import { useTheme, alpha } from "@mui/material/styles";

export default function Hero() {
  const theme = useTheme();

  return (
    <Button
      fullWidth
      variant="text"
      component={Link}
      href={LinkedInURL}
      sx={{ display: "flex" }}
    >
      <Container maxWidth={false} disableGutters>
        <Grid
          id="heroGridContainer"
          container
          columns={24}
          flexWrap="nowrap"
          justifyContent="center"
          alignItems="stretch"
        >
          <Grid id="leftHeroPicGridItem" xs={2} padding={0}>
            <Box height="100%" sx={{ aspectRatio: 9 / 16 }} position="relative">
              <Image
                id="leftHeroPic"
                src={profilePic}
                quality={100}
                placeholder="blur"
                style={{
                  objectFit: "cover",
                  objectPosition: "55% 10%",
                  opacity: "80%",
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
            flexGrow={5}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              variant="title"
              color="titleColor.light"
              align="center"
              sx={{
                textDecorationStyle: "solid",
                textDecorationColor: alpha(theme.palette.titleColor.light, 1),
                textDecorationLine: "underline",
              }}
            >
              Anthony Dombrowski
            </Typography>
          </Grid>
          <Grid
            id="hero-linkedin"
            xs={2}
            display="flex"
            justifyContent="left"
            alignItems="stretch"
          >
            <Box
              mt="auto"
              // color={theme.palette.secondary.light}
              sx={{
                aspectRatio: 1,
              }}
            >
              <LinkedInIcon
                sx={{
                  color: "#0077b5",
                  background: `radial-gradient(ellipse closest-corner at center, ${alpha(
                    "#fff",
                    0.85,
                  )} 0, ${alpha("#fff", 0.85)} 52%, ${alpha(
                    "#fff",
                    0.5,
                  )} 53%,${alpha("#fff", 0)} 54%)`,
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>
          </Grid>

          <Grid id="rightHeroPicGridItem" xs={0} sm={2} padding={0}>
            <Box
              width="100%"
              height="100%"
              sx={{ aspectRatio: 9 / 16 }}
              position="relative"
            >
              <Image
                id="rightHeroPic"
                src={profilePicR}
                quality={100}
                placeholder="blur"
                style={{
                  objectFit: "cover",
                  objectPosition: "55% 10%",
                  opacity: "80%",
                }}
                fill
                priority
                alt="anthony dombrowski profile pic"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Button>
  );
}
