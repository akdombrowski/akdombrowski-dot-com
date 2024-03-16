"use client";
import "client-only";

import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import VideoContainer from "./VideoContainer";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { VIDEOS_TITLE_URL } from "./VideoURLs";
// import useClient from "./useClient";
// import ReactPlayer from "react-player/youtube";
// import NextVideoPlayer from "next-video";

export default function Videos() {
  const theme = useTheme();
  // 14 videos right now
  const createVideoContainers = VIDEOS_TITLE_URL.map((video, i) => {
    return (
      <Grid
        xs={6}
        key={"video-" + video.title}
        flexGrow={0}
        display="flex"
        paddingY={3}

        paddingX={5}
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
    <Box
      width="100%"
      height="100%"
      sx={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.2), 20%, rgba(0,0,0,0.7), 80%, rgba(0,0,0,0.2)),linear-gradient(to bottom, rgba(0,0,0,0.2), 20%, rgba(0,0,0,0.7), 80%, rgba(0,0,0,0.2))`,
      }}
    >
      <Paper elevation={6}>
        <Box
          width="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          pt={3}
        >
          <Typography variant="h3" color="text.light">
            Content Library
          </Typography>
        </Box>
        <Grid
          id="videosContainer"
          container
          columns={12}
          marginX={3}
          marginY={2}
          alignContent="space-around"
          alignItems="stretch"
          justifyContent="center"
          sx={{
            "--Grid-borderWidth": "5px",
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
            xs={1}
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
            xs={1}
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
