"use client";
import Image from "next/image";
import Box from "@mui/material/Box";

export default function AppBarLogo() {
  return (
    <Box
      id="appbarlogo-boxContainer"
    >
      {/* Logo Image */}
      <Image
        src={"/gokart-R.png"}
        alt="logo of anthony dombrowski"
        style={{ overflow: "hidden", objectFit: "contain" }}
        width={73}
        height={50}
      />
    </Box>
  );
}
