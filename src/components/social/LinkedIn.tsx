import IconButton from "@mui/material/IconButton";
import Link from "next/link";

import LinkedInIcon from "@mui/icons-material/LinkedIn";

const defaultLogoSize = { width: "5vmin", height: "5vmin" };
const defaultPadding = { x: 1, y: 1 };


export default function LinkedIn(props: {
  padding?: { x?: string | number; y?: string | number };
  size?: { width?: string | number; height?: string | number };
}) {
  return (
    <IconButton
      color="inherit"
      href="https://www.linkedin.com/in/akdombrowski"
      component={Link}
      aria-label="LinkedIn profile link with username akdombrowski"
      sx={{
        alignSelf: "center",
        px: props?.padding?.x ?? defaultPadding.x,
        py: props?.padding?.y ?? defaultPadding.y,
      }}
    >
      <LinkedInIcon
        sx={{
          width: props?.size?.width ?? defaultLogoSize.width,
          height: props?.size?.height ?? defaultLogoSize.height,
        }}
      />
    </IconButton>
  );
}
