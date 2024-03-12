import Image, { getImageProps } from "next/image";
import profilePic from "../../public/profile.jpg";

import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useTheme, alpha } from "@mui/material/styles";

const getBackgroundImage = (srcSet = "") => {
  const imageSet = srcSet
    .split(", ")
    .map((str) => {
      const [url, dpi] = str.split(" ");
      return `url("${url}") ${dpi}`;
    })
    .join(", ");
  return `image-set(${imageSet})`;
};

export default function Hero() {
  const theme = useTheme();
  const titleColor = alpha("#54F2F2", 0.9);

  const {
    props: { srcSet },
  } = getImageProps({
    alt: "",
    width: 3267,
    height: 4896,
    src: "/profile.jpg",
  });
  const backgroundImage = getBackgroundImage(srcSet);
  const style = { height: "100%", width: "100%", backgroundImage };

  return (
    <Grid
      id="hero"
      container
      flexShrink={1}
      flexGrow={1}
      spacing={3}
      justifyContent="center"
      alignItems="center"
      sx={style}>
      <Grid
        xs={12}
        display="flex"
        flexShrink={1}
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center">
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
        columns={12}
        spacing={1}
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
      <Grid
        xs={12}
        display="flex"
        flex="2 0 auto"
        height="10vh"
        justifyContent="center"
        alignItems="center">
        <Box
          width="100%"
          height="100%"
          mx="50%"
          // sx={{ objectFit: "scale-down" }}
        >
          <Image
            src={profilePic}
            quality={100}
            placeholder="blur"
            objectFit="contain"
            sizes="100vw"
            style={{
              width: "auto",
              height: "100%",
            }}
            // fill
            priority
            alt="anthony dombrowski profile pic"
          />
        </Box>
      </Grid>
    </Grid>
  );
}
