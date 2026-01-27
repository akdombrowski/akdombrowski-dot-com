"use client";
import "client-only";

import Box from "@mui/material/Box";

import type { MouseEventHandler, SyntheticEvent } from "react";
import Image from "next/image";

export default function WakaTimeBadge() {
  const url =
    "https://wakatime.com/badge/user/0ff1bf94-98b4-465f-8b63-a51fb5151092.svg";
  const handleClick: MouseEventHandler<HTMLDivElement> = (
    event: SyntheticEvent<HTMLDivElement>,
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
      <Image src={url} alt="WakaTime badge" width={160} height={32} />
    </Box>
  );
}
