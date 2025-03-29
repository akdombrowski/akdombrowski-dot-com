"use client";
import "client-only";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTheme, alpha } from "@mui/material/styles";
import _ from "lodash";
import { FORM_PAGE_URL } from "@/pages/videos/id-crisis/page";

const DEBUG = false;

export default function SectionTitle({ title }: { title: string }) {
  const theme = useTheme();

  if (DEBUG) {
    console.log(title);
  }

  return (
    <Box
      id="sectionTitle"
      display="flex"
      justifyContent="left"
      alignItems="stretch"
      sx={{
        backgroundColor: alpha(theme.palette.background.default, 0.25),
      }}
    >
      <Typography
        variant="h4"
        textAlign="left"
        p={1}
        sx={{
          backgroundColor: alpha("#fff", 0.12),
          borderRadius: 2,
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: alpha("#fff", 0.01),
          color: theme.palette.text.primary,
          textTransform: "none",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}
