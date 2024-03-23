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

import { LinkedInURL } from "@/social/LinkedIn";

import { useTheme, alpha } from "@mui/material/styles";

export default function Hero(props: {
  title?: string;
  fontSize?: number | string;
}) {
  const theme = useTheme();

  return (
    <Button
      fullWidth
      variant="text"
      component={Link}
      href={LinkedInURL}
      sx={{ display: "flex", alignItems: "stretch" }}
    >
      <Grid
        id="heroGridContainer"
        container
        columns={12}
        height="100%"
        rowSpacing={1}
        flexWrap="nowrap"
        justifyContent="center"
        alignItems="stretch"
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
            variant="title"
            color="titleColor.light"
            align="center"
            fontSize={props.fontSize}
            zIndex={100}
            px={1}
            sx={{
              textDecorationStyle: "solid",
              textDecorationColor: alpha(theme.palette.titleColor.light, 1),
              textDecorationLine: "underline",
              background: `radial-gradient(ellipse farthest-corner at center, ${alpha(
                "#000",
                0.5,
              )} 0, ${alpha("#000", 0.2)} 12%, ${alpha(
                "#000",
                .1,
              )} 20%, ${alpha("#000", 0)} 100%)`,

              boxShadow: `0 8px 0 ${alpha("#000", 0.1)}, 0 1px 1px 0 ${alpha(
                "#000",
                0.1,
              )}, 1px 11px 1px 1px ${alpha("#000", 0.01)}`,
            }}
          >
            {props.title ?? "Anthony Dombrowski"}
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
