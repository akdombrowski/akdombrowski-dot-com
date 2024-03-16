"use client";
import "client-only";

import Image, { getImageProps } from "next/image";
import profilePic from "../../public/profile.jpg";
import profilePicR from "../../public/profileR.jpg";

import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useTheme, alpha } from "@mui/material/styles";

export default function Roles() {
  return (
    <Grid
      container
      columns={12}
      justifyContent="space-around"
      alignItems="center"
    >
      <Grid xs={5} display="flex" justifyContent="center" alignItems="center">
        <Typography variant="role" align="right" color="text.secondary">
          Product Manager
        </Typography>
      </Grid>
      <Grid xs={2} display="flex" justifyContent="center" alignItems="center">
        <Typography variant="role" align="center" color="text.secondary">
          Leader
        </Typography>
      </Grid>
      <Grid xs={5} display="flex" justifyContent="center" alignItems="center">
        <Typography variant="role" align="left" color="text.secondary">
          Developer Advocate
        </Typography>
      </Grid>

      <Grid
        xs={2}
        paddingX={0}
        paddingY={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
      ></Grid>
      <Grid xs={3} paddingY={1} display="flex" justifyContent="center">
        <Typography variant="subRole" align="right" color="text.secondary">
          Software Engineer
        </Typography>
      </Grid>
      <Grid
        xs={1}
        paddingX={0}
        paddingY={1}
        display="flex"
        justifyContent="center"
      ></Grid>
      <Grid
        xs={5}
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
          &nbsp; (see "hilarious")
        </Typography>
      </Grid>
      <Grid
        xs={1}
        paddingX={0}
        paddingY={1}
        display="flex"
        justifyContent="center"
      ></Grid>
    </Grid>
  );
}
