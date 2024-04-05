"use client";
import "client-only";

import { signIn } from "next-auth/react";
import Button from "@mui/material/Button";

export default function SignInButton() {
  return (
    <Button
      size="large"
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
      onClick={() => signIn("siwe")}>
      Sign In
    </Button>
    // <Link href="/api/auth/signin/spotify">Sign In</Link>
  );
}
