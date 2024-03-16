import IconButton from "@mui/material/IconButton";
import Link from "next/link";

import LinkedInIcon from "@mui/icons-material/LinkedIn";

const defaultBtnSize = { width: "auto", height: "100%" };
const defaultLogoSize = { width: "auto", height: "100%" };
const defaultPadding = { x: 1, y: 1 };


export default function LinkedIn(props: {
  padding?: { x?: string | number; y?: string | number };
  iconSize?: { width?: string | number; height?: string | number };
  btnSize?: { width?: string | number; height?: string | number };
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
        width: props?.btnSize?.width ?? defaultBtnSize.width,
        height: props?.btnSize?.height ?? defaultBtnSize.height,
      }}
    >
      <LinkedInIcon
        sx={{
          width: props?.iconSize?.width ?? defaultLogoSize.width,
          height: props?.iconSize?.height ?? defaultLogoSize.height,
        }}
      />
    </IconButton>
  );
}
