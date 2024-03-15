import IconButton from "@mui/material/IconButton";
import Link from "next/link";

import TwitterIcon from "@mui/icons-material/X";

export default function X() {
  return (
    <IconButton
      color="inherit"
      component={Link}
      href="https://twitter.com/akatsdombrowski"
      aria-label="X, formerly Twitter"
      sx={{ alignSelf: "center" }}
      size="large"
    >
      <TwitterIcon />
    </IconButton>
  );
}
