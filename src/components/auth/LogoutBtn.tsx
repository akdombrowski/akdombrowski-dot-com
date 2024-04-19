"use client";

import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import { signOut } from "next-auth/react";

export default function LogoutBtn({ provider }: { provider: string }) {
  return (
    <Button
      variant="contained"
      sx={{ p: 2, pt: 3 }}
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
