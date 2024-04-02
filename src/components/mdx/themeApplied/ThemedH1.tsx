"use client";

import "client-only"

import { Typography } from "@mui/material";
import type { ReactNode } from "react";

export default function ThemedH1({ children }: {children: ReactNode}) {

  return (
    <Typography variant="title" component="h1">
      {children}
    </Typography>
  );
}
