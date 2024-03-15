import IconButton from "@mui/material/IconButton";
import Link from "next/link";

import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function LinkedIn() {
  return (
    <IconButton
      color="inherit"
      href="https://www.linkedin.com/in/akdombrowski"
      component={Link}
      aria-label="LinkedIn"
      sx={{ alignSelf: "center" }}
      size="large"
    >
      <LinkedInIcon />
    </IconButton>
  );
}
