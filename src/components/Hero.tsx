"use client";
import "client-only";

import Link from "next/link";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { LinkedInURL } from "@/social/LinkedIn";

import { useTheme, alpha } from "@mui/material/styles";
import type { TypographyOwnProps } from "@mui/material/Typography";
import type { GridProps } from "@mui/material/Grid";
import { useEffect, useState } from "react";

import ProfilePic from "@/components/home/ProfilePic";
import WakaTimeBadge from "./WakaTimeBadge";
import StackOverflowBadge from "./StackOverflowBadge";

interface HeroProps extends GridProps {
  text?: string;
  variant?: TypographyOwnProps["variant"];
  fontSize?: number | string;
  height?: number | string;
}
export default function Hero(props: HeroProps) {
  const theme = useTheme();
  const [scrollY, setScrollY] = useState(0);
  const [innerHeight, setInnerHeight] = useState(1080);
  const [bodyHeight, setBodyHeight] = useState(1080);

  const calcOpacity = () => {
    if (scrollY < innerHeight / 10) {
      return 100;
    } else {
      return 100 - Math.round(((scrollY + innerHeight) / bodyHeight) * 100 + 10);
    }
  };

  const handleResize = () => {
    setInnerHeight(window.innerHeight);
    setBodyHeight(document.body.clientHeight);
  };

  const handleScroll = () => {
    setScrollY(Math.round(window.scrollY));
  };

  useEffect(() => {
    if (window) {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Grid {...props}>
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
          )} 0,${alpha("#000", 0.1)} 15%, ${alpha("#000", 0.05)} 90%, ${alpha("#fff", 0.02)} 100%)`,
        }}
        zIndex={100}
      >
        <Grid
          id="heroTitleGridItemLeft"
          flexBasis="min-content"
          flexGrow={10}
          py={1}
          display="flex"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
        >
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
            <Typography
              variant={props.variant}
              color="titleColor.light"
              align="center"
              fontSize={props.fontSize}
              zIndex={100}
              px={1}
              height="100%"
              sx={{
                textDecorationStyle: "solid",
                textDecorationColor: alpha(theme.palette.titleColor.light, 1),
                textDecorationLine: "underline",
              }}
            >
              {props.text ?? "Anthony Dombrowski"}
            </Typography>
          </Button>
        </Grid>

        <Grid
          id="heroTitleGridItemRight"
          flexBasis="min-content"
          size={{ xs: 1 }}
          justifyContent="left"
          alignItems="center"
          container
          // overflow="hidden"
        >
          {/* <ProfilePic
              boxProps={{
                height: "100%",
                sx: { aspectRatio: 9 / 16 },
                // position: "relative",
                position: "absolute",
                zIndex: -100,
              }}
              imageProps={{
                id: "leftHeroPic",
                src: "/profileCropped2.jpg",
                quality: 100,
                style: {
                  objectFit: "cover",
                  objectPosition: "55% 10%",
                  // opacity: `${scrollY < innerHeight ? "100%" : 100 - Math.round(((scrollY + innerHeight) / bodyHeight) * 100 * 2 - 50)}%`,
                  opacity: `80%`,
                  // overflow: "visible",
                  overflow: "hidden",
                  // width: "auto",
                  // height: "100%",
                },
                fill: true,
                // height: 320,
                // width: 180,
                sizes: "(1 / 10) * 100vw",
                priority: true,
                alt: "anthony dombrowski profile pic",
              }}
            /> */}
          <Grid
            id="landing-stackOverflowBadgeGridWrapper"
            size={12}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <StackOverflowBadge />
          </Grid>
          <Grid
            id="landing-wakatimeBadgeGridWrapper"
            size={12}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <WakaTimeBadge />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
