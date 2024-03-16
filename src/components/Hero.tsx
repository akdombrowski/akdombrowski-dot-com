"use client";
import "client-only";

import Image, { getImageProps } from "next/image";
import profilePic from "/public/profile.jpg";
import profilePicR from "/public/profileR.jpg";
import Roles from "@/components/Roles";

import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MUILink from "@mui/material/Link";

import Link from "next/link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useTheme, alpha } from "@mui/material/styles";

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
    <Grid
      id="heroGridContainer"
      container
      justifyContent="center"
      alignItems="stretch"
    >
      <Grid id="leftHeroPicGridItem" xs={4} sm={2} xl={1} padding={0}>
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
        id="heroTitleGridItem"
        xs={8}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          id="heroTitleInnerGridContainer"
          container
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            id="heroTitleInnerGridItem"
            xs={12}
            display="flex"
            paddingBottom="1rem"
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
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
          </Grid>
          <Grid
            xs={12}
            paddingX=".5rem"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
              <MUILink
                component={Link}
                href="https://www.linkedin.com/in/akdombrowski
"
              >
            <Typography variant="body2" color="text.secondary" mt={1}>
                https://linkedin.com/in/akdombrowski
            </Typography>
              </MUILink>
          </Grid>
        </Grid>
      </Grid>
      <Grid id="rightHeroPicGridItem" xs={0} sm={2} xl={1} padding={0}>
        <Box height="100%" position="relative">
          <Image
            id="rightHeroPic"
            src={profilePicR}
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
    </Grid>
  );
}
