import "client-only";

import { SyntheticEvent } from "react";

import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Unstable_Grid2";
import MUILink from "@mui/material/Link";

import Link from "next/link";
import { redirect } from "next/navigation";

export default function PageSections() {
  return (
    <Grid
      id="logoAndPageSections-gridContainer"
      container
      columns={3}
      width="100%"
      flexWrap="nowrap"
      overflow="hidden"
      justifyContent="start"
      alignItems="stretch"
    >
      <Grid
        display="flex"
        flexShrink={1}
        justifyContent="start"
        alignItems="stretch"
        component={Link}
        href="/"
        >
        <MenuItem
          id="videos-menuItem"
          sx={{ py: "6px", px: "12px" }}
        >
          <Typography variant="button" color="text.primary">
            Home
          </Typography>
        </MenuItem>
      </Grid>
      <Grid
        display="flex"
        flexShrink={1}
        justifyContent="start"
        alignItems="stretch"
        component={Link}
        href="/videos"
        >
        <MenuItem
          id="videos-menuItem"
          sx={{ py: "6px", px: "12px" }}
        >
          <Typography variant="button" color="text.primary">
            Videos
          </Typography>
        </MenuItem>
      </Grid>

      <Grid
        display="flex"
        flexShrink={1}
        justifyContent="start"
        alignItems="stretch"
        component={Link}
        href="/blogs"
      >
        <MenuItem id="blogs-menuItem">
          <Typography variant="button" color="text.primary">
            Blogs
          </Typography>
        </MenuItem>
      </Grid>

      {/* <Grid
        display="flex"
        flexGrow={1}
        justifyContent="start"
        alignItems="stretch"
      >
        <MenuItem
          id="highlights-menuItem"
          onClick={scrollToSection}
          sx={{ py: "6px", px: "12px" }}
        >
          <Typography variant="button" color="text.primary">
            Highlights
          </Typography>
        </MenuItem>
      </Grid> */}
    </Grid>
  );
}
