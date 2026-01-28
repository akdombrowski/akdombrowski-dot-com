import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import { LinkedInURL } from "@/components/social";

export default function Copyright() {
  return (
    // <Link variant="text" component={Link} href={LinkedInURL}
    // size="small">
    <Link href={LinkedInURL}>
      <Typography
        variant="body1"
        color="text.secondary"
        align="left"
        fontStyle="normal"
        fontSize=".75rem"
      >
        {"Copyright © "}
        Anthony Dombrowski
        {" " + new Date().getFullYear()}.
      </Typography>
    </Link>
    // </Button>
  );
}
