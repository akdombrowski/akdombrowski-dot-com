import Link from "next/link";

import IconButton from "@mui/material/IconButton";
import TwitterIcon from "@mui/icons-material/X";

import { defaultBtnSize, defaultIconSize, defaultPadding } from "./index";

export const GitHubURL = "https://www.github.com/akdombrowski";

export default function X(props: {
  padding?: { x?: string | number; y?: string | number };
  iconSize?: { width?: string | number; height?: string | number };
  btnSize?: { width?: string | number; height?: string | number };
  color?: string;
}) {
  return (
    <IconButton
      component={Link}
      href="https://twitter.com/akatsdombrowski"
      aria-label="X (formerly Twitter)  profile link with username akatsdombrowski"
      sx={{
        color: props.color ?? "inherit",
        alignSelf: "center",
        px: props?.padding?.x ?? defaultPadding.x,
        py: props?.padding?.y ?? defaultPadding.y,
        width: props?.btnSize?.width ?? defaultBtnSize.width,
        height: props?.btnSize?.height ?? defaultBtnSize.height,
      }}
    >
      <TwitterIcon
        sx={{
          width: props?.iconSize?.width ?? defaultIconSize.width,
          height: props?.iconSize?.height ?? defaultIconSize.height,
        }}
      />
    </IconButton>
  );
}
