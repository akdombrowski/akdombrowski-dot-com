"use client";

import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { signIn } from "next-auth/react";

export default function LoginBtn({ provider }: { provider: string }) {
  return (
    <Button
      variant="contained"
      sx={{ p: 2 }}
      size="small"
      onClick={() => signIn(provider)}
    >
      <Typography
        textTransform="capitalize"
        sx={{ my: "auto" }}
      >
        Login with {provider}
      </Typography>
    </Button>
  );
}
