import Link from "next/link";

import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import type { SxProps, Theme } from "@mui/material";

export const LinkedInURL = "https://www.linkedin.com/in/akdombrowski";

export default function LinkedIn({
  iconSx,
  btnSx,
}: {
  iconSx?: SxProps<Theme> | undefined;
  btnSx?: SxProps<Theme> | undefined;
}) {
  return (
    <IconButton
      href={LinkedInURL}
      component={Link}
      aria-label="LinkedIn profile link with username akdombrowski"
      sx={{ ...btnSx }}
    >
      <LinkedInIcon sx={{ ...iconSx }} />
    </IconButton>
  );
}
