import type { ReactNode } from "react";

import Container from "@mui/material/Container";

export default function AIChatLayout({ children }: { children: ReactNode }) {
  return (
    <Container
      id="aiChat-LayoutContainer"
      maxWidth={false}
      disableGutters
    >
      {children}
    </Container>
  );
}
