import Box from "@mui/material/Box";
import Image from "next/image";

export default function BlogImg({ src, width, isCentered }: { src: string, width: number | string; isCentered?: boolean; }) {
  return (
    <Box
      width="80%"
      position="relative"
      mx="auto"
      sx={{ aspectRatio: 700 / 314, backgroundColor: "#FFF" }}
    >
      <Image
        src="/PKCE-attack-graphic-blog.webp"
        alt="Graphic depicting how PKCE stops the attack"
        style={{ objectFit: "contain" }}
        fill
      />
    </Box>
  );
}
