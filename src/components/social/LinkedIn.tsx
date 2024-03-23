import Link from "next/link";

import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { defaultBtnSize, defaultIconSize, defaultPadding } from "./index";

export const LinkedInURL = "https://www.linkedin.com/in/akdombrowski";

export default function LinkedIn(props: {
  padding?: { x?: string | number; y?: string | number };
  iconSize?: { width?: string | number; height?: string | number };
  btnSize?: { width?: string | number; height?: string | number };
  color?: string;
}) {
  return (
    <IconButton
      href={LinkedInURL}
      component={Link}
      aria-label="LinkedIn profile link with username akdombrowski"
      sx={{
        color: props.color ?? "inherit",
        alignSelf: "center",
        px: props?.padding?.x ?? defaultPadding.x,
        py: props?.padding?.y ?? defaultPadding.y,
        width: props?.btnSize?.width ?? defaultBtnSize.width,
        height: props?.btnSize?.height ?? defaultBtnSize.height,
      }}
    >
      <LinkedInIcon
        sx={{
          width: props?.iconSize?.width ?? defaultIconSize.width,
          height: props?.iconSize?.height ?? defaultIconSize.height,
        }}
      />
    </IconButton>
  );
}
