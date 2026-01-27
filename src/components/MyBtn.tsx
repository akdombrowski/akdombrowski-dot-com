"use client";

import NextLink from "next/link";
import { forwardRef } from "react";
import Button from "@mui/material/Button";

const LinkComponent = forwardRef<HTMLAnchorElement, any>(function LinkComponent(props, ref) {
  return (
    <NextLink
      ref={ref}
      {...props}
    />
  );
});

export function MyBtn(props: { href: string; children: React.ReactNode }) {
  return (
    <Button
      component={LinkComponent}
      href={props.href}
      variant="contained"
      fullWidth
      sx={{ backgroundColor: "transparent" }}
    >
      {props.children}
    </Button>
  );
}
