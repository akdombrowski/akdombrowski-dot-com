import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import Link from "next/link";
import type { ReactNode } from "react";

export default function TOCComponent({
  path,
  title,
  desc,
  children,
}: {
  path?: string;
  title: string;
  desc: string;
  children: ReactNode;
}) {
  return (
    <>
      <Grid
        id={`toc-componentTitleDesc-${desc}`}
        xs={2}
        pr={{ xs: 0, sm: 1, md: 2, lg: 8 }}
        container
        display="flex"
        justifyContent="space-around"
        alignItems="stretch"
        maxHeight="50vh"
      >
        <Stack
          width="100%"
          height="100%"
          justifyContent="center"
          alignItems="stretch"
        >
          <Box pt="auto" minHeight="10%"></Box>
          {path ? (
            <Button
              variant="contained"
              fullWidth
              component={Link}
              href={path}
              sx={{ py: 2 }}
            >
              <Typography variant="poster" color="text.light">
                {title}
              </Typography>
            </Button>
          ) : (
            <Typography variant="poster" color="text.light">
              {title}
            </Typography>
          )}
          <Box display="flex" justifyContent="end" alignItems="start">
            <Typography variant="subtitle1" color="text.light" align="center">
              {desc}
            </Typography>
          </Box>
        </Stack>
      </Grid>

      <Grid
        id={`toc-componentChildren-${desc}`}
        xs="auto"
        flexGrow={1}
        display="flex"
        justifyContent="end"
        alignItems="stretch"
        minWidth={{ xs: 320, sm: 400 }}
        maxHeight="50vh"
        pl={6}
      >
        {children}
      </Grid>
    </>
  );
}
