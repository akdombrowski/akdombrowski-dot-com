import Box from "@mui/material/Box";
import Image from "next/image";
import type {SxProps} from "@mui/material"

export default function BlogImg({
  src,
  containerWidth,
  isCentered,
  containerStyles,
  ...props
}: {
  src: string;
  containerWidth?: number | string;
  isCentered?: boolean;
  containerStyles?: SxProps;
}) {
  return (
    <Box
      width={containerWidth ?? "80%"}
      position="relative"
      mx={isCentered ? "auto" : ""}
      sx={containerStyles}
    >
      <Image
        src={src}
        alt="Graphic depicting how PKCE stops the attack"
        fill
        {...props}
      />
    </Box>
  );
}
