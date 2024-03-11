import Image from "next/image";

import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useTheme, alpha } from "@mui/material/styles";

export default function Hero() {
  const theme = useTheme();
  const titleColor = alpha("#54F2F2", 0.9);

  return (
    <Grid
      id="hero"
      container
      spacing={3}
      justifyContent="center"
      alignItems="center">
      <Grid xs={12} display="flex" justifyContent="center" alignItems="center">
        <Typography
          component="h1"
          variant="h1"
          color={titleColor}
          textAlign="center">
          Anthony Dombrowski
        </Typography>
      </Grid>
      <Grid
        xs={10}
        container
        spacing={3}
        justifyContent="space-around"
        alignItems="center">
        <Grid
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center">
          <Typography variant="h4" textAlign="left" color="text.secondary">
            Explore our cutting-edge dashboard, delivering high-quality
            solutions tailored to your needs.
          </Typography>
        </Grid>
        <Grid
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center">
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
          <Typography
            variant="caption"
            textAlign="center"
            sx={{ opacity: 0.8 }}>
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
          <Typography
            variant="caption"
            textAlign="center"
            sx={{ opacity: 0.8 }}>
            I don&apos;t know. We&apos;ll see.
          </Typography>
        </Grid>
      </Grid>
      <Box
        id="image"
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          position: "relative",
          height: { xs: 200, sm: 700 },
          width: "100%",
          borderRadius: "10px",
          outline: "1px solid",
          outlineColor: alpha("#9CCCFC", 0.1),
          boxShadow: `0 0 24px 12px ${alpha("#033363", 0.2)}`,
        }}>
        <Image
          src="/profile.jpg"
          fill={true}
          priority={false}
          alt="anthony dombrowski profile pic"></Image>
      </Box>
    </Grid>
  );
}
