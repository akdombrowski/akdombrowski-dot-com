"use client";
import "client-only";

import Image, { getImageProps } from "next/image";
import Link from "next/link";
import profilePic from "../../public/profile_9x16.jpg";
import profilePicR from "../../public/profileR_9x16.jpg";

import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MUILink from "@mui/material/Link";
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
          &nbsp; (see &quot;hilarious&quot;)
        </Typography>
      </Grid>
      <Grid
        xs={1}
        paddingX={0}
        paddingY={1}
        display="flex"
        justifyContent="center"
      ></Grid>
      <Grid xs={12}>
        <MUILink
          component={Link}
          href="https://stackoverflow.com/users/5527213/akdombrowski"
        >
          <Image
            src="https://stackoverflow.com/users/flair/5527213.png?theme=dark"
            width="208"
            height="58"
            alt="profile for akdombrowski at Stack Overflow, Q&amp;A for professional and enthusiast programmers"
            title="profile for akdombrowski at Stack Overflow, Q&amp;A for professional and enthusiast programmers"
          />
        </MUILink>
      </Grid>
    </Grid>
  );
}
