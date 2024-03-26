"use client";
import "client-only";

import Link from "next/link";
import Image from "next/image";

import profilePic from "/public/profile_9x16.jpg";
import profilePicR from "/public/profileR_9x16.jpg";

import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { LinkedInURL } from "@/social/LinkedIn";

import { useTheme, alpha } from "@mui/material/styles";
import type { TypographyOwnProps } from "@mui/material/Typography";

export default function Hero(props: {
  text?: string;
  variant?: TypographyOwnProps["variant"];
  fontSize?: number | string;
  height?: number | string;
}) {
  const theme = useTheme();

  return (
    <Button
      fullWidth
      variant="text"
      component={Link}
      href={LinkedInURL}
      sx={{
        display: "flex",
        alignItems: "stretch",
        height: props.height,
      }}
    >
      <Grid
        id="heroGridContainer"
        container
        columns={12}
        rowSpacing={1}
        width="100%"
        flexWrap="nowrap"
        justifyContent="center"
        alignItems="stretch"
        sx={{
          background: `radial-gradient(ellipse farthest-corner at center, ${alpha(
            "#000",
            1,
          )} 0,${alpha("#000", 0.1)} 15%, ${alpha("#000", 0.01)} 90%, ${alpha(
            "#fff",
            0.01,
          )} 100%)`,
        }}
      >
        <Grid
          id="leftHeroPicGridItem"
          xs={2}
          display="flex"
          justifyContent="center"
          alignItems="stretch"
        >
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
                overflow: "hidden",
              }}
              fill
              priority
              alt="anthony dombrowski profile pic"
            />
          </Box>
        </Grid>

        <Grid
          id="heroTitleGridItem"
          flexBasis="min-content"
          flexGrow={1}
          py={1}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            variant={props.variant}
            color="titleColor.light"
            align="center"
            fontSize={props.fontSize}
            zIndex={100}
            px={1}
            sx={{
              textDecorationStyle: "solid",
              textDecorationColor: alpha(theme.palette.titleColor.light, 1),
              textDecorationLine: "underline",
            }}
          >
            {props.text ?? "Anthony Dombrowski"}
          </Typography>
        </Grid>

        <Grid
          id="rightHeroPicGridItem"
          xs={0}
          foreHundo={2}
          display="flex"
          justifyContent="center"
          alignItems="stretch"
          sx={{
            display: { xs: "none", foreHundo: "block" },
          }}
        >
          <Box height="100%" sx={{ aspectRatio: 9 / 16 }} position="relative">
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
    </Button>
  );
}
