import "client-only";

import { SyntheticEvent } from "react";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Unstable_Grid2";

export default function PageSections({
  scrollToSection,
}: {
  scrollToSection: (event: SyntheticEvent) => void;
}) {
  return (
    <Grid
      id="logoAndPageSections-gridContainer"
      container
      columns={3}
      flexWrap="nowrap"
      overflow="hidden"
      justifyContent="start"
      alignItems="stretch"
    >
      <Grid
        // xs={1}
        display="flex"
        justifyContent="start"
        alignItems="stretch"
      >
        <MenuItem
          id="videos-menuItem"
          onClick={scrollToSection}
          sx={{ py: "6px", px: "12px" }}
        >
          <Typography variant="button" color="text.primary">
            Videos
          </Typography>
        </MenuItem>
      </Grid>

      <Grid
        // xs={1}
        display="flex"
        justifyContent="start"
        alignItems="stretch"
      >
        <MenuItem
          id="blogs-menuItem"
          onClick={scrollToSection}
          sx={{ py: "6px", px: "12px" }}
        >
          <Typography variant="button" color="text.primary">
            Blogs
          </Typography>
        </MenuItem>
      </Grid>

      <Grid
        // xs={1}
        display="flex"
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
      </Grid>
    </Grid>
  );
}
