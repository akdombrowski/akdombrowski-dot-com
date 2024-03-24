"use client";
import "client-only";

import Image from "next/image";
import Link from "next/link";

import Box from "@mui/material/Box";
import MUILink from "@mui/material/Link";

export default function StackOverflowBadge() {
  return (
    <Box p={0} display="flex" justifyContent="center">
      <MUILink
        component={Link}
        target="_blank"
        href="https://stackoverflow.com/users/5527213/akdombrowski"
      >
        <Image
          src="https://stackoverflow.com/users/flair/5527213.png?theme=dark"
          width="208"
          height="58"
          alt="Profile for akdombrowski at Stack Overflow"
          title="Profile for akdombrowski at Stack Overflow"
        />
      </MUILink>
    </Box>
  );
}
