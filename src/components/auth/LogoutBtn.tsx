"use client";

import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { signOut } from "next-auth/react";

export default function LogoutBtn({ }: { provider?: string; }) {

  return (
    <Button
      variant="contained"
      sx={{ p: 2 }}
      onClick={() => signOut()}
    >
      <Typography
        textTransform="capitalize"
        sx={{ my: "auto" }}
      >
        Logout
      </Typography>
    </Button>
  );
}
