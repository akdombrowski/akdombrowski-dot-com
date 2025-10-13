import type { ReactNode } from "react";

import Container from "@mui/material/Container";

export default function PlayerRatingLayout({ children }: { children: ReactNode }) {
  return (
    <Container
      id="playerRating-LayoutContainer"
      maxWidth={false}
    >
      {children}
    </Container>
  );
}
