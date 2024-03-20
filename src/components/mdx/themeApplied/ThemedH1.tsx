"use client";

import "client-only"

import {useTheme} from "@mui/material/styles"
import { Typography } from "@mui/material";
import type { ReactNode } from "react";

export default function ThemedH1({ children }: {children: ReactNode}) {
  const theme = useTheme();

  return (
    <Typography variant="title" component="h1">
      {children}
    </Typography>
  );
}
