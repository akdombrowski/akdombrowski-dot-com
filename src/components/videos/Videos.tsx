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
// import ReactPlayer from "react-player/youtube";

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
        justifyContent="center"
        alignItems="stretch"
        sx={{
          aspectRatio: 16 / 9,
        }}
      >
        <Box
          maxWidth="100%"
          height="100%"
          display="flex"
          justifyContent="center"
          sx={{ aspectRatio: 16 / 9 }}
        >
          <VideoContainer id={String(i)} title={video.title} url={video.url} />
        </Box>
      </Grid>
    );
  });

  return (
    <Box
      width="100%"
      height="100%"
      sx={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.2) 20%, rgba(0,0,0,0.7) 80%, rgba(0,0,0,0.2)), linear-gradient(to bottom, rgba(0,0,0,0.2) 20%, rgba(0,0,0,0.7) 80%, rgba(0,0,0,0.2))`,
      }}
    >
      <Paper elevation={6}>
        <Box
          width="100%"
          py={2}
          sx={{
            backgroundImage: `radial-gradient(circle at center,  rgba(35, 181, 211,0.2) 0, rgba(35, 181, 211,0.05) 45%, rgba(201, 242, 153,0.01) 55%,  rgba(255,255,255,0.0) 70%)`,
          }}
        >
          <Typography
            variant="h1"
            component="span"
            display="inline-block"
            width="100%"
            fontWeight={100}
            align="center"
            letterSpacing="1vw"
          >
            Content Library
          </Typography>
        </Box>
        <Grid
          id="videosContainer"
          container
          columns={{ xs: 6, md: 12 }}
          alignContent="space-around"
          alignItems="stretch"
          justifyContent="center"
          // sx={{
          //   "--Grid-borderWidth": "5px",
          //   "borderTop": "var(--Grid-borderWidth) solid",
          //   "borderLeft": "var(--Grid-borderWidth) solid",
          //   "borderColor": "divider",
          //   "& > div": {
          //     borderRight: "var(--Grid-borderWidth) solid",
          //     borderBottom: "var(--Grid-borderWidth) solid",
          //     borderColor: "divider",
          //   },
          // }}
        >
          {createVideoContainers}
        </Grid>
      </Paper>
    </Box>
  );
}
