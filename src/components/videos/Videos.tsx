"use client";
import "client-only";

import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import VideoContainer from "./VideoContainer";
import Box from "@mui/material/Box";
import { VIDEOS_TITLE_URL } from "./VideoURLs";
// import useClient from "./useClient";
// import ReactPlayer from "react-player/youtube";
// import NextVideoPlayer from "next-video";

export default function Videos() {
  // 14 videos right now
  const createVideoContainers = VIDEOS_TITLE_URL.map((video, i) => {
    return (
      <Grid
        xs={1}
        key={"video-" + video.title}
        flexGrow={1}
        display="flex"
        sx={{ aspectRatio: 16 / 9 }}
        justifyContent="center"
      >
        <Box maxWidth="100%" height="100%" sx={{ aspectRatio: 16 / 9 }}>
          <VideoContainer title={video.title} url={video.url} />
        </Box>
      </Grid>
    );
  });

  const createSpacers = () => {
    const numVideos = VIDEOS_TITLE_URL.length;
    const numSpacersSm = numVideos % 2;
  };

  return (
    <Box width="100%" height="100%">
      <Paper elevation={6}>
        <Box width="100%" display="flex" justifyContent="center" alignItems="center">
          <Typography variant="h3">
            Content Library
          </Typography>
        </Box>
        <Grid
          id="videosContainer"
          container
          spacing={{ xs: 1, sm: 2, md: 3 }}
          columns={{ xs: 1, md: 2, lg: 3, xl: 4 }}
          paddingX={3}
          paddingY={2}
          flexShrink={0}
          alignContent="space-around"
          alignItems="stretch"
          justifyContent="center"
          sx={{
            "--Grid-borderWidth": "1px",
            "borderTop": "var(--Grid-borderWidth) solid",
            "borderLeft": "var(--Grid-borderWidth) solid",
            "borderColor": "divider",
            "& > div": {
              borderRight: "var(--Grid-borderWidth) solid",
              borderBottom: "var(--Grid-borderWidth) solid",
              borderColor: "divider",
            },
          }}
        >
          {createVideoContainers}
          <Grid
            xs={0}
            lg={1}
            id="spacer"
            flexGrow={0}
            display="flex"
            sx={{ aspectRatio: 16 / 9 }}
            justifyContent="center"
          >
            <Box
              maxWidth="100%"
              height="100%"
              sx={{ aspectRatio: 16 / 9 }}
            ></Box>
          </Grid>
          <Grid
            xs={0}
            lg={0}
            xl={1}
            id="spacer"
            flexGrow={0}
            display="flex"
            sx={{ aspectRatio: 16 / 9 }}
            justifyContent="center"
          >
            <Box
              maxWidth="100%"
              height="100%"
              sx={{ aspectRatio: 16 / 9 }}
            ></Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
