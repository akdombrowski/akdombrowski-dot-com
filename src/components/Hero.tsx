"use client";
import "client-only";

import Image, { getImageProps } from "next/image";
import profilePic from "/public/profile.jpg";
import profilePicR from "/public/profileR.jpg";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MUILink from "@mui/material/Link";

import Link from "next/link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useTheme, alpha } from "@mui/material/styles";
import { LinkedIn, GitHub, X, StackedSocialLinks } from "./social";

const getBackgroundImage = (srcSet = "") => {
  const imageSet = srcSet
    .split(", ")
    .map((str) => {
      const [url, dpi] = str.split(" ");
      return `url("${url}") ${dpi}`;
    })
    .join(", ");
  return `image-set(${imageSet})`;
};

export default function Hero() {
  const {
    props: { srcSet },
  } = getImageProps({
    alt: "Anthony Dombrowski Profile Picture",
    width: 816.5,
    height: 1224,
    src: "/profile.jpg",
  });
  const backgroundImage = getBackgroundImage(srcSet);

  return (
    <Container maxWidth={false} disableGutters>
      <Grid
        id="heroGridContainer"
        container
        columns={12}
        flexWrap="nowrap"
        justifyContent="center"
        alignItems="stretch"
      >
        <Grid id="leftHeroPicGridItem"  xs={2} padding={0}>
          <Box width="100%" height="100%" position="relative">
            <Image
              id="leftHeroPic"
              src={profilePic}
              quality={100}
              placeholder="blur"
              objectFit="cover"
              objectPosition="55% 10%"
              style={{
                opacity: "65%",
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
            <Typography
              variant="title"
              align="center"
              // whiteSpace="none"
              // textOverflow="ellipsis"
              // overflow="hidden"
            >
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
            <LinkedIn
              btnSize={{ width: "100%", height: "auto" }}
              iconSize={{ width: "100%", height: "auto" }}
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
              objectFit="cover"
              objectPosition="55% 10%"
              style={{
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
