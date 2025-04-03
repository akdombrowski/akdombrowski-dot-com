"use client";
import "client-only";


import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function Roles() {
  return (
    <Grid
      container
      columns={12}
      justifyContent="space-around"
      alignItems="center"
    >
      {/*
       * Start of 1st row
       * Major roles
       */}
      <Grid size={{xs: 5}} display="flex" justifyContent="center" alignItems="center">
        <Typography variant="role" align="right" color="text.secondary">
          Product Manager
        </Typography>
      </Grid>
      <Grid size={{xs: 2}} display="flex" justifyContent="center" alignItems="center">
        <Typography variant="role" align="center" color="text.secondary">
          Leader
        </Typography>
      </Grid>
      <Grid size={{xs: 5}} display="flex" justifyContent="center" alignItems="center">
        <Typography variant="role" align="left" color="text.secondary">
          Developer Advocate
        </Typography>
      </Grid>
      {/*
       * End of 1st row
       * Major roles
       */}

      {/*
       * Start of 2nd row
       * Minor roles
       */}
      <Grid
        size={{xs: 2}}
        paddingX={0}
        paddingY={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
      ></Grid>
      <Grid size={{xs: 3}} paddingY={1} display="flex" justifyContent="center">
        <Typography variant="subRole" align="right" color="text.secondary">
          Software Engineer
        </Typography>
      </Grid>
      <Grid
        size={{xs: 1}}
        paddingX={0}
        paddingY={1}
        display="flex"
        justifyContent="center"
      ></Grid>
      {/* Padding Grid to balance layout */}

      <Grid
        size={{xs: 5}}
        paddingX={0}
        paddingY={1}
        display="flex"
        justifyContent="right"
        alignItems="center"
      >
        <Typography variant="subRole" align="left" color="text.secondary">
          Creative Humorist
        </Typography>
        <Typography variant="subtitle1" align="left" color="text.secondary">
          &nbsp; (see &quot;hilarious&quot;)
        </Typography>
      </Grid>
      {/* Padding Grid to balance layout */}

      {/* Padding Grid to balance layout */}
      <Grid
        size={{xs: 1}}
        paddingX={0}
        paddingY={1}
        display="flex"
        justifyContent="center"
      ></Grid>
      {/* Padding Grid to balance layout */}
      {/*
       * End of 2nd row
       * Minor roles
       */}
    </Grid>
  );
}
