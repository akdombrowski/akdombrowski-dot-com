"use client";
import "client-only";

import Image from "next/image";
import Link from "next/link";

import Box from "@mui/material/Box";

export default function StackOverflowBadge() {
  return (
    <Box
      p={0}
      display="flex"
      justifyContent="center"
      component={Link}
      position="relative"
      target="_blank"
      href="https://stackoverflow.com/users/5527213/akdombrowski"
    >
      <Image
        src="https://stackoverflow.com/users/flair/5527213.png?theme=dark"
        width={208}
        height={58}
        style={{ objectFit: "contain" }}
        quality={100}
        alt="Anthony's akdombrowski Stack Overflow profile"
        title="Anthony's akdombrowski Stack Overflow profile"
      />
    </Box>
  );
}
