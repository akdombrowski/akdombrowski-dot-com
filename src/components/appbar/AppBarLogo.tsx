"use client";
import Image from "next/image";
import Box from "@mui/material/Box";

export default function AppBarLogo() {
  return (
    <Box
      id="appbarlogo-boxContainer"
      display="flex"
      maxWidth="100%"
      minWidth="50px"
      height="100%"
      justifyContent="left"
      alignItems="stretch"
    >
      <Box
        sx={{ aspectRatio: 16 / 9 }}
        maxWidth="100%"
        height="100%"
        position="relative"
      >
        {/* Logo Image */}
        <Image
          src={"/gokart-R.png"}
          alt="logo of anthony dombrowski"
          objectFit="contain"
          style={{ overflow: "hidden" }}
          fill
        />
      </Box>
    </Box>
  );
}
