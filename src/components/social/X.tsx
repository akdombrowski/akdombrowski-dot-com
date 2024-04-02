import Link from "next/link";

import IconButton from "@mui/material/IconButton";
import TwitterIcon from "@mui/icons-material/X";
import type { SxProps, Theme } from "@mui/material";

export const GitHubURL = "https://www.github.com/akdombrowski";

export default function X({
  iconSx,
  btnSx,
}: {
  iconSx?: SxProps<Theme> | undefined;
  btnSx?: SxProps<Theme> | undefined;
}) {
  return (
    <IconButton
      component={Link}
      href="https://twitter.com/akatsdombrowski"
      aria-label="X (formerly Twitter)  profile link with username akatsdombrowski"
      sx={{ ...btnSx }}
    >
      <TwitterIcon sx={{ ...iconSx }} />
    </IconButton>
  );
}
