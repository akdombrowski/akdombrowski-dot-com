"use client";
import "client-only";

import Link from "next/link";
import Image from "next/image";

import Box from "@mui/material/Box";

import wakatimeBadgeSVGUrl from "https://wakatime.com/share/@adombrowski/b2ad4f88-9f2a-483d-859c-716bc86bc1a4.svg?url";

export default function WakaTimeBadge() {
  return (
    <Box
      p={ 0 }
      width="100%"
      height="100%"
      display="flex"
      justifyContent="center"
      component={Link}
      position="relative"
      target="_blank"
      href="https://linkedin.com/in/akdombrowski"
    >
      {/* // TODO: this is not a string (i think? it's an svg, unless that's being returned as a string???), but it will complain that it's unknown without it */}
      <Image src={ wakatimeBadgeSVGUrl as string } alt="Wakatime: Anthony Dombrowski's Coding"
        sizes="100vw"
        style={ { width: "100%", height: "auto" } }
        width={ 800 }
        height={ 600 }
      />
    </Box>
  );
}
