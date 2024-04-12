import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Unstable_Grid2";

import VideoContainer from "@/components/videos/VideoContainer";
import {
  KAPTCHA_ME_VIDEOS,
  VIDEOS_TITLE_URL,
} from "@/components/videos/VideoURLs";
import _ from "lodash-es";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import Link from "next/link";
import Image from "next/image";

const highlightVideo = _.find(VIDEOS_TITLE_URL, (vid) => {
  return vid.title.startsWith(
    "OAuth 2.0: Implicit, Authorization Code, and PKCE",
  );
})!;

const kaptchameShort = _.find(KAPTCHA_ME_VIDEOS, (vid) => {
  return vid.title.startsWith("kaptcha-me racing theme short");
})!;

export default function TOC() {
  return (
    <Container id="landingPage" maxWidth={false} disableGutters>
      <Grid
        id="landing-grid"
        container
        justifyContent="space-between"
        alignItems="center"
        rowSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid
          id="toc-videosBtnGridWrapper"
          xs="auto"
          display="flex"
          justifyContent="left"
          alignItems="stretch"
          maxHeight="50vh"
        >
          <Box width="10vw" />
          <Stack
            width="100%"
            height="100%"
            justifyContent="center"
            alignItems="stretch"
          >
            <Box pt="auto" minHeight="10%"></Box>

            <Button
              variant="contained"
              fullWidth
              component={Link}
              href="/videos"
              sx={{ py: 2 }}
            >
              <Typography variant="poster" color="text.light">
                Videos
              </Typography>
            </Button>

            <Box display="flex" justifyContent="end" alignItems="start">
              <Typography variant="subtitle1" color="text.light" align="center">
                click to see more...
              </Typography>
            </Box>
          </Stack>
        </Grid>

        <Grid xs container justifyContent="center" alignItems="stretch">
          <Grid xs={2} />

          <Grid
            id="toc-videoGridWrapper-kaptchame"
            xs
            flexGrow={5}
            display="flex"
            justifyContent="center"
          >
            <Box
              component={Link}
              href="/videos/kaptcha-me"
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

          <Grid xs flexShrink={2} />

          <Grid
            id="toc-videoGridWrapper-highlight"
            xs={4}
            sm={5}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box width="100%" maxHeight="100%">
              <VideoContainer video={highlightVideo} size={12} />
            </Box>
          </Grid>

          <Grid xs flexShrink={2} />
        </Grid>

        <Grid
          id="toc-dividerWrapper"
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

        <Grid
          id="toc-videoGridWrapper-katpchame"
          xs="auto"
          flexGrow={1}
          display="flex"
          justifyContent="end"
          alignItems="stretch"
          minWidth={{ xs: 320, sm: 400 }}
          maxHeight="50vh"
          pl={6}
        >
          <VideoContainer video={kaptchameShort} size={12} />
        </Grid>

        <Grid
          id="toc-dividerWrapper"
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

        <Grid
          id="toc-blogsBtnGridWrapper"
          xs={2}
          display="flex"
          justifyContent="left"
          alignItems="stretch"
          pr={{ xs: 0, sm: 1, md: 2, lg: 8 }}
        >
          <Stack
            width="100%"
            height="100%"
            justifyContent="center"
            alignItems="stretch"
          >
            <Box pt="auto" minHeight="10%"></Box>
            <Button
              variant="contained"
              fullWidth
              component={Link}
              href="/blogs"
              sx={{ py: 2 }}
            >
              <Typography variant="poster" color="text.light">
                Blogs
              </Typography>
            </Button>
            <Box display="flex" justifyContent="end" alignItems="start">
              <Typography variant="subtitle1" color="text.light" align="center">
                coming soon...
              </Typography>
            </Box>
          </Stack>
        </Grid>

        <Grid
          id="toc-videoGridWrapper"
          xs="auto"
          flexGrow={1}
          display="flex"
          justifyContent="end"
          alignItems="center"
          pl={6}
        >
          <Box>
            <Typography>blogs coming soon...</Typography>
          </Box>
        </Grid>

        <Grid
          id="toc-dividerWrapper"
          xs={12}
          py={6}
          display="flex"
          justifyContent="center"
          alignItems="center"
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
