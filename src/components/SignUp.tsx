"use client";
import "client-only";

import Image, { getImageProps } from "next/image";
import profilePic from "../../public/profile.jpg";
import profilePicR from "../../public/profileR.jpg";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useTheme, alpha } from "@mui/material/styles";

export default function SignUp() {
  return (
    <Grid
      id="signup"
      container
      spacing={3}
      justifyContent="center"
      alignItems="stretch">
      <Grid xs={12} display="flex" justifyContent="center" alignItems="center">
        <Typography
          variant="subtitle1"
          textAlign="center"
          color="text.secondary">
          Elevate your experience with top-tier features and services.
        </Typography>
      </Grid>
      <Grid
        xs={9}
        padding={0}
        display="flex"
        justifyContent="center"
        alignItems="center">
        <TextField
          id="outlined-basic"
          hiddenLabel
          fullWidth
          size="small"
          variant="outlined"
          aria-label="Enter your email address"
          placeholder="Your email address"
          inputProps={{
            "autoComplete": "off",
            "aria-label": "Enter your email address",
          }}
        />
      </Grid>
      <Grid
        xs={3}
        padding={0}
        display="flex"
        justifyContent="center"
        alignItems="center">
        <Button variant="contained" color="primary">
          Start now
        </Button>
      </Grid>
      <Grid
        xs={12}
        sm={12}
        md={12}
        lg={7}
        xl={6}
        padding={0}
        paddingTop={1}
        display="flex"
        justifyContent="flex-start"
        alignItems="center">
        <Typography variant="caption" textAlign="start" sx={{ opacity: 0.8 }}>
          By clicking &quot;Start now&quot; you agree to be contacted.
        </Typography>
      </Grid>
      <Grid
        xs={12}
        padding={0}
        paddingTop=".2rem"
        display="flex"
        justifyContent="flex-start"
        alignItems="center">
        <Typography variant="caption" textAlign="start" sx={{ opacity: 0.8 }}>
          Sometimes out of the blue... For no reason...
        </Typography>
      </Grid>
      <Grid
        xs={5}
        lg={4}
        xl={3}
        paddingTop=".15rem"
        paddingBottom={1}
        display="flex"
        justifyContent="flex-start"
        alignItems="center">
        <Typography variant="caption" textAlign="start" sx={{ opacity: 0.8 }}>
          Just kidding.
        </Typography>
      </Grid>
      <Grid
        xs={1}
        xl={3}
        paddingTop=".15rem"
        paddingBottom={1}
        display="flex"
        justifyContent="center"
        alignItems="center">
        <Typography variant="caption" textAlign="center" sx={{ opacity: 0.8 }}>
          Maybe...
        </Typography>
      </Grid>
      <Grid
        xs={6}
        xl={6}
        paddingTop=".15rem"
        paddingBottom={1}
        display="flex"
        justifyContent="center"
        alignItems="center">
        <Typography variant="caption" textAlign="center" sx={{ opacity: 0.8 }}>
          I don&apos;t know. We&apos;ll see.
        </Typography>
      </Grid>
    </Grid>
  );
}
