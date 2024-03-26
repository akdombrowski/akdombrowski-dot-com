import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Unstable_Grid2";

import VideoContainer from "@/components/videos/VideoContainer";
import { VIDEOS_TITLE_URL } from "@/components/videos/VideoURLs";
import _ from "lodash";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import Link from "next/link";

const highlightVideo = _.find(VIDEOS_TITLE_URL, (vid) => {
  return vid.title.startsWith(
    "OAuth 2.0: Implicit, Authorization Code, and PKCE",
  );
})!;

export default function TOC() {
  return (
    <Container id="landingPage" maxWidth={false} disableGutters>
      <Grid id="landing-grid" container rowSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid
          id="toc-videosBtnGridWrapper"
          xs={3}
          md={2}
          container
          display="flex"
          justifyContent="space-around"
          alignItems="center"
        >
          <Stack
            width="100%"
            height="100%"
            justifyContent="center"
            alignItems="stretch"
          >
            <Box pt={5}></Box>

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

            <Box pt={3} display="flex" justifyContent="end" alignItems="start">
              <Typography variant="subtitle1" color="text.light" align="center">
                click to see more...
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
          <VideoContainer video={highlightVideo} size={12} />
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

        <Grid
          id="toc-blogsBtnGridWrapper"
          xs={3}
          md={2}
          display="flex"
          justifyContent="left"
          alignItems="center"
        >
          <Stack
            width="100%"
            height="100%"
            justifyContent="center"
            alignItems="stretch"
          >
            <Box pt={5}></Box>
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
            <Box pt={3} display="flex" justifyContent="end" alignItems="start">
              <Typography variant="subtitle1" color="text.light" align="center">
                click to see more...
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
            <Typography>blogs</Typography>
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
