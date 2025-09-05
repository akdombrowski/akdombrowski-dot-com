"use client";
import "client-only";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

import { useEffect } from "react";
export default function Roles() {
  const theme = useTheme();

  useEffect(() => {
    console.log(Object.keys(theme.palette));
  }, [theme]);

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
      <Grid
        size={{ xs: 5 }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          variant="role"
          align="right"
          color="info"
        >
          Product Manager
        </Typography>
      </Grid>
      <Grid
        size={{ xs: 2 }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          variant="role"
          align="center"
          color="info"
        >
          Leader
        </Typography>
      </Grid>
      <Grid
        size={{ xs: 5 }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          variant="role"
          align="left"
          color="info"
        >
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
        size={{ xs: 4 }}
        paddingY={1}
        display="flex"
        justifyContent="flex-end"
      >
        <Typography
          variant="subRole"
          align="center"
          color="info"
        >
          Software Engineer
        </Typography>
      </Grid>
      <Grid
        size={{ xs: 4 }}
        paddingX={0}
        paddingY={1}
        display="flex"
        justifyContent="center"
      >
        <Typography
          variant="subRole"
          align="center"
          color="info"
        >
          DevRel
        </Typography>
      </Grid>

      <Grid
        size={{ xs: 4 }}
        paddingX={0}
        paddingY={1}
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Typography
          variant="subRole"
          align="left"
          color="info"
        >
          Creative Humorist
        </Typography>
        <Typography
          variant="subtitle1"
          align="left"
          color="info"
        >
          &nbsp; (see &quot;hilarious&quot;)
        </Typography>
      </Grid>

      {/*
       * End of 2nd row
       * Minor roles
       */}
    </Grid>
  );
}
