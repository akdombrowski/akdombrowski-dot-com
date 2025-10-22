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
            id="heroTitleGridItem"
            flexBasis="min-content"
            flexGrow={1}
            py={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
            overflow="hidden"
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
          </Grid>
        </Grid>
      </Button>
    </Grid>
  );
}
