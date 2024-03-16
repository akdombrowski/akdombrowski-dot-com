import IconButton from "@mui/material/IconButton";
import Link from "next/link";

import TwitterIcon from "@mui/icons-material/X";

const defaultLogoSize = { width: "5vmin", height: "5vmin" };
const defaultPadding = { x: 1, y: 1 };

export default function X(props: {
  padding?: { x?: string | number; y?: string | number };
  size?: { width?: string | number; height?: string | number };
}) {
  return (
    <IconButton
      color="inherit"
      component={Link}
      href="https://twitter.com/akatsdombrowski"
      aria-label="X (formerly Twitter)  profile link with username akatsdombrowski"
      sx={{
        alignSelf: "center",
        px: props?.padding?.x ?? defaultPadding.x,
        py: props?.padding?.y ?? defaultPadding.y,
      }}
    >
      <TwitterIcon
        sx={{
          width: props?.size?.width ?? defaultLogoSize.width,
          height: props?.size?.height ?? defaultLogoSize.height,
        }}
      />
    </IconButton>
  );
}
