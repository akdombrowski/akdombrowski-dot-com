import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import MUILink from "@mui/material/Link";
import Link from "next/link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { GitHub, LinkedIn, X } from "@/components/social";
import Copyright from "@/components/Copyright";

export default function Footer() {
  return (
    <Container
      id="footer"
      maxWidth={false}
      disableGutters
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: 1,
        textAlign: { sm: "center", md: "left" },
      }}
    >
      <Box
        id="footer-boxWrapper"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          pt: 1,
          px: 0,
          width: "100%",
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <Box
          id="footer-copyright"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            width: "100%",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Copyright />
        </Box>
        <Stack
          direction="row"
          justifyContent="left"
          spacing={0}
          useFlexGap
          sx={{
            color: "text.secondary",
          }}
        >
          <GitHub />
          <LinkedIn />
          <X />
        </Stack>
      </Box>
    </Container>
  );
}
