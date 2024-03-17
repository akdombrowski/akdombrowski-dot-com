import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";
import Button from "@mui/material/Button";
import Link from "next/link";
import { LinkedInURL } from "@/social";

export default function Copyright() {
  return (
    <Button variant="text" component={Link} href={LinkedInURL}
    size="small">
      <Typography
        variant="body1"
        color="text.secondary"
        align="left"
        fontStyle="normal"
        sx={{fontSize: "1.5rem"}}
      >
        {"Copyright © "}
        Anthony Dombrowski
        {" " + new Date().getFullYear()}.
      </Typography>
    </Button>
  );
}
