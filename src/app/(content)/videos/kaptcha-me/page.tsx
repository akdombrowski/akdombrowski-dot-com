import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Unstable_Grid2";

import VideoContainer from "@/components/videos/VideoContainer";
import { KAPTCHA_ME_VIDEOS } from "@/components/videos/VideoURLs";
import _ from "lodash-es";
import Typography from "@mui/material/Typography";

import Link from "next/link";

const kaptchaMeDemo = _.find(KAPTCHA_ME_VIDEOS, (vid) => {
  return vid.title.startsWith("kaptcha-me demo");
})!;

export default function KaptchaMePage() {
  return (
    <Container
      id="kaptchaMePage"
      maxWidth={false}
      disableGutters
    >
      <Grid
        id="kaptchaMe-main-gridContainer"
        container
        justifyContent="space-between"
        alignItems="center"
        rowSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid
          id="kaptchaMe-videosBtnGridWrapper"
          xs="auto"
          display="flex"
          justifyContent="left"
          alignItems="stretch"
          maxHeight="50vh"
        >
          <Typography
            variant="poster"
            color="text.light"
          >
            kaptcha-me
          </Typography>
        </Grid>

        <Grid
          xs
          container
          justifyContent="center"
          alignItems="stretch"
        >
          <Grid xs={2} />

          <Grid
            id="kaptchaMe-videoGridWrapper-gif"
            xs
            flexGrow={5}
            display="flex"
            justifyContent="center"
          >
            <Box
              component={Link}
              href=""
              height="100%"
              maxWidth="100%"
              sx={{
                aspectRatio: 720 / 480,
                backgroundImage: "url(/kaptchaMeGoKart.gif)",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            ></Box>
          </Grid>

          <Grid
            xs
            flexShrink={2}
          />

          <Grid
            id="kaptchaMe-videoGridWrapper-demo"
            xs={4}
            sm={5}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              width="100%"
              maxHeight="100%"
            >
              <VideoContainer
                video={kaptchaMeDemo}
                size={12}
              />
            </Box>
          </Grid>

          <Grid
            xs
            flexShrink={2}
          />
        </Grid>

        <Grid
          id="kaptchaMe-dividerWrapper"
          xs={12}
          py={6}
          display="flex"
          justifyContent="center"
          alignItems="stretch"
        >
          <Divider
            variant="fullWidth"
            sx={{ borderColor: "#132FAA", borderWidth: "1px", width: "100%" }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
