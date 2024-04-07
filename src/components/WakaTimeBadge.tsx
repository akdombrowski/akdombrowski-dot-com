"use client";
import "client-only";

import Link from "next/link";

import Box from "@mui/material/Box";

import Badge from "https://wakatime.com/badge/user/0ff1bf94-98b4-465f-8b63-a51fb5151092.svg";

export default function WakaTimeBadge() {
  return (
    <Box
      p={0}
      display="flex"
      justifyContent="center"
      component={Link}
      position="relative"
      target="_blank"
      href="https://wakatime.com/@adombrowski"
    >
      <Badge />
    </Box>
  );
}
