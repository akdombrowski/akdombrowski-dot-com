import "client-only";


import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Unstable_Grid2";

import Link from "next/link";

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
        <MenuItem id="videos-menuItem" sx={{ py: "6px", px: "12px" }}>
          <Typography variant="appBarText" color="text.primary">
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
        <MenuItem id="videos-menuItem" sx={{ py: "6px", px: "12px" }}>
          <Typography variant="appBarText" color="text.primary">
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
          <Typography variant="appBarText" color="text.primary">
            Blogs
          </Typography>
        </MenuItem>
      </Grid>
    </Grid>
  );
}
