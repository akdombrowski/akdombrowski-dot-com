import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";
import Link from "next/link";
export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="left">
      {"Copyright © "}
      <MuiLink
        component={Link}
        color="inherit"
        href="https://linkedin.com/in/akdombrowski"
      >
        Anthony Dombrowski on LinkedIn
      </MuiLink>
      {" " + new Date().getFullYear()}.
    </Typography>
  );
}
