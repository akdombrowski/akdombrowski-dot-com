"use client";
import "client-only";

import Link from "next/link";

import Box from "@mui/material/Box";

import Badge from "https://wakatime.com/badge/user/0ff1bf94-98b4-465f-8b63-a51fb5151092.svg";
import type { EventHandler, MouseEventHandler, SyntheticEvent } from "react";

export default function WakaTimeBadge() {
  const handleClick: MouseEventHandler<HTMLDivElement> = (
    event: SyntheticEvent<HTMLDivElement>
  ): void => {
    event.preventDefault();
    window.open("https://wakatime.com/@adombrowski", "_blank");
  };

  return (
    <Box
      p={0}
      display="flex"
      justifyContent="center"
      position="relative"
      // component={Link}
      // target="_blank"
      // href="https://wakatime.com/@adombrowski"
      onClick={handleClick}
    >
      <Badge />
    </Box>
  );
}
