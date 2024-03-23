import Link from "next/link";

import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";

import { defaultBtnSize, defaultIconSize, defaultPadding } from "./index";

export const GitHubURL = "https://www.github.com/akdombrowski";

export default function GitHub(props: {
  padding?: { x?: string | number; y?: string | number; };
  iconSize?: { width?: string | number; height?: string | number; };
  btnSize?: { width?: string | number; height?: string | number; };
  color?: string;
}) {
  return (
    <IconButton
      href={GitHubURL}
      component={Link}
      aria-label="GitHub profile link with username akdombrowski"
      sx={{
        alignSelf: "center",
        color: props.color ?? "inherit",
        px: props?.padding?.x ?? defaultPadding.x,
        py: props?.padding?.y ?? defaultPadding.y,
        width: props?.btnSize?.width ?? defaultBtnSize.width,
        height: props?.btnSize?.height ?? defaultBtnSize.height,
      }}
    >
      <GitHubIcon
        sx={{
          width: props?.iconSize?.width ?? defaultIconSize.width,
          height: props?.iconSize?.height ?? defaultIconSize.height,
        }}
      />
    </IconButton>
  );
}
