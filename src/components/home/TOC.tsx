import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid2";

import VideoContainer from "@/components/videos/VideoContainer";
import {
  KAPTCHA_ME_VIDEOS,
  VIDEOS_TITLE_URL,
} from "@/components/videos/VideoURLs";
import _ from "lodash";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import Link from "next/link";
import Image from "next/image";

const highlightVideo = _.find(VIDEOS_TITLE_URL, (vid) => {
  return vid.title.startsWith(
    "OAuth 2.0: Implicit, Authorization Code, and PKCE"
  );
})!;

const kaptchameShort = _.find(KAPTCHA_ME_VIDEOS, (vid) => {
  return vid.title.startsWith("kaptcha-me racing theme short");
})!;

export default function TOC() {
  return (
    // <Box id="toc" display="flex" width="100%">
    <Grid
      id="toc-grid"
      container
      size={12}
      justifyContent="center"
      alignItems="stretch"
      // rowSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      <Grid
        id="toc-videosRow"
        container
        size={12}
        justifyContent="space-between"
        alignItems="stretch"
      >
        <Grid
          id="toc-videosBtnGridWrapper"
          size={2}
          display="flex"
          justifyContent="left"
          alignItems="stretch"
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

        <Grid
          id="toc-videoClipsWrapper"
          size={9}
          container
          justifyContent="end"
          alignItems="stretch"
          pl={6}
        >
          <Grid
            id="toc-videoGridWrapper-kaptchame"
            size="grow"
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

          <Grid
            id="toc-videoGridWrapper-highlight"
            size="grow"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box width="100%" maxHeight="100%">
              <VideoContainer video={highlightVideo} size={{ xs: 12 }} />
            </Box>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        id="toc-dividerWrapper"
        size={12}
        py={1}
        display="flex"
        justifyContent="center"
        alignItems="stretch"
      >
        <Divider
          variant="fullWidth"
          sx={{ borderColor: "#11004A", borderWidth: "1px", width: "100%" }}
        />
      </Grid>

      <Grid
        id="toc-videoGridWrapper-katpchame"
        size={{ xs: 12 }}
        display="flex"
        justifyContent="end"
        alignItems="stretch"
        minWidth={{ xs: 320, sm: 400 }}
        maxHeight="50vh"
      >
        <VideoContainer
          video={kaptchameShort}
          size={{ xs: 6 }}
          justifyContent="end"
        />
      </Grid>

      <Grid
        id="toc-dividerWrapper"
        size={12}
        py={1}
        display="flex"
        justifyContent="center"
        alignItems="stretch"
      >
        <Divider
          variant="fullWidth"
          sx={{ borderColor: "#11004A", borderWidth: "1px", width: "100%" }}
        />
      </Grid>

      <Grid
        id="toc-blogsRow"
        container
        size={12}
        justifyContent="between"
        alignItems="stretch"
      >
        <Grid
          id="toc-blogsBtnGridWrapper"
          size={{ xs: 2 }}
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
          id="toc-blogsComingSoon"
          size={{ xs: 10 }}
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
      </Grid>

      <Grid
        id="toc-blogsDividerWrapper"
        size={{ xs: 12 }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Divider
          variant="fullWidth"
          sx={{ borderColor: "#11004A", borderWidth: "1px", width: "100%" }}
        />
      </Grid>
    </Grid>
    // </Box>
  );
}
