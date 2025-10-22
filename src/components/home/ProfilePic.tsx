"use client";
import "client-only";

import Image, { type ImageProps } from "next/image";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import type { GridProps } from "@mui/material/Grid";
import type { BoxProps } from "@mui/material/Box";

interface ProfilePicProps extends GridProps {
  gridProps: GridProps;
  boxProps: BoxProps;
  imageProps: ImageProps;
}

export default function ProfilePic(props: ProfilePicProps) {
  const { gridProps, boxProps, imageProps } = props;
  return (
    <Grid {...gridProps}>
      <Box {...boxProps}>
        <Image {...imageProps} />
      </Box>
    </Grid>
  );
}
