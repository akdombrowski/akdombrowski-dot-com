import Link from "next/link";

import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";

import type { SxProps, Theme } from "@mui/material";

export const GitHubURL = "https://www.github.com/akdombrowski";

export default function GitHub({
  iconSx,
  btnSx,
}: {
  iconSx?: SxProps<Theme> | undefined;
  btnSx?: SxProps<Theme> | undefined;
}) {
  return (
    <IconButton
      href={GitHubURL}
      component={Link}
      aria-label="GitHub profile link with username akdombrowski"
      sx={{ ...btnSx }}
    >
      <GitHubIcon sx={{ ...iconSx }} />
    </IconButton>
  );
}
