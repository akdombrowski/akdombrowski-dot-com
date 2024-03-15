import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";

export default function GitHub() {
  return (
    <IconButton
      color="inherit"
      href="https://github.com/akdombrowski"
      component={Link}
      aria-label="GitHub"
      sx={{ alignSelf: "center" }}
      size="large"
    >
      <GitHubIcon />
    </IconButton>
  );
}
