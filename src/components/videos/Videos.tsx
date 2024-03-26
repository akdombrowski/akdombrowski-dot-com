"use client";
import "client-only";

import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import VideoContainer from "./VideoContainer";
import Box from "@mui/material/Box";
import { useTheme, alpha } from "@mui/material/styles";
import {
  VIDEOS_TITLE_URL,
  type VideoURLObj,
} from "@/components/videos/VideoURLs";
import _ from "lodash";

const DEBUG = false;

// import ReactPlayer from "react-player/youtube";
const numVideos = VIDEOS_TITLE_URL.length;
const standardsVideos = _.filter(VIDEOS_TITLE_URL, (video) =>
  _.includes(video.tag, "standards"),
);
const postmanVideos = _.filter(VIDEOS_TITLE_URL, (video) =>
  _.includes(video.tag, "postman"),
);
const awarenessVideos = _.filter(VIDEOS_TITLE_URL, (video) =>
  _.includes(video.tag, "awareness"),
);
const playlists = _.filter(VIDEOS_TITLE_URL, (video) =>
  _.includes(video.tag, "playlist"),
);
const otherVideos = _.difference(
  VIDEOS_TITLE_URL,
  standardsVideos,
  postmanVideos,
  awarenessVideos,
  playlists,
);
const numVideosFromCat = _.union(
  standardsVideos,
  postmanVideos,
  awarenessVideos,
  playlists,
  otherVideos,
).length;

export const createVideoContainers = (videos: VideoURLObj[]) =>
  videos.map((video, i) => {
    return (
      <VideoContainer key={i} video={video} size={6} idPrefix={String(i)} />
    );
  });

export default function Videos() {
  const theme = useTheme();

  if (DEBUG) {
    console.log("numVideos:", numVideos);
    console.log("numVideosFromCat:", numVideosFromCat);
    console.log(
      "( numVideosFromCat === numVideosFromCat )",
      "=",
      "(",
      numVideosFromCat,
      "===",
      numVideosFromCat,
      ")",
      "=",
      numVideosFromCat === numVideosFromCat,
    );
  }

  return (
    <Box
      width="100%"
      height="100%"
      sx={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.2) 20%, rgba(0,0,0,0.7) 80%, rgba(0,0,0,0.2)), linear-gradient(to bottom, rgba(0,0,0,0.2) 20%, rgba(0,0,0,0.7) 80%, rgba(0,0,0,0.2))`,
      }}
    >
      <Paper elevation={6}>
        <Grid
          id="videosContainer"
          container
          columns={{ xs: 6, md: 12 }}
          alignContent="space-around"
          alignItems="stretch"
          justifyContent="center"
        >
          <Grid
            xs={12}
            display="flex"
            justifyContent="left"
            alignItems="stretch"
            sx={{
              backgroundColor: alpha(theme.palette.background.default, 0.25),
            }}
          >
            <Typography
              variant="h4"
              textAlign="left"
              p={1}
              sx={{
                backgroundColor: alpha("#fff", 0.09),
                borderRadius: 2,
                borderWidth: 1,
                borderStyle: "solid",
                borderColor: alpha("#fff", 0.01),
                // borderColor: alpha(theme.palette.background.default, 0.5),
                // backgroundColor: "#fff"
              }}
            >
              Identity Standards Education
            </Typography>
          </Grid>
          {createVideoContainers(standardsVideos)}
          <Grid
            xs={12}
            pt={5}
            display="flex"
            justifyContent="left"
            alignItems="stretch"
            sx={{
              backgroundColor: alpha(theme.palette.background.default, 0.25),
            }}
          >
            <Typography
              variant="h4"
              textAlign="left"
              p={1}
              sx={{
                backgroundColor: alpha("#fff", 0.09),
                borderRadius: 2,
                borderWidth: 1,
                borderStyle: "solid",
                borderColor: alpha("#fff", 0.01),
              }}
            >
              Collaboration
            </Typography>
          </Grid>
          {createVideoContainers(postmanVideos)}
          <Grid
            xs={12}
            pt={5}
            display="flex"
            justifyContent="left"
            alignItems="stretch"
            sx={{
              backgroundColor: alpha(theme.palette.background.default, 0.25),
            }}
          >
            <Typography
              variant="h4"
              textAlign="left"
              p={1}
              sx={{
                backgroundColor: alpha("#fff", 0.09),
                borderRadius: 2,
                borderWidth: 1,
                borderStyle: "solid",
                borderColor: alpha("#fff", 0.01),
              }}
            >
              Awareness
            </Typography>
          </Grid>
          {createVideoContainers(awarenessVideos)}

          <Grid
            xs={12}
            pt={5}
            display="flex"
            justifyContent="left"
            alignItems="stretch"
            sx={{
              backgroundColor: alpha(theme.palette.background.default, 0.25),
            }}
          >
            <Typography
              variant="h4"
              textAlign="left"
              p={1}
              sx={{
                backgroundColor: alpha("#fff", 0.09),
                borderRadius: 2,
                borderWidth: 1,
                borderStyle: "solid",
                borderColor: alpha("#fff", 0.01),
              }}
            >
              More
            </Typography>
          </Grid>
          {createVideoContainers(otherVideos)}

          <Grid
            xs={12}
            pt={5}
            display="flex"
            justifyContent="left"
            alignItems="stretch"
            sx={{
              backgroundColor: alpha(theme.palette.background.default, 0.25),
            }}
          >
            <Typography
              variant="h4"
              textAlign="left"
              p={1}
              sx={{
                backgroundColor: alpha("#fff", 0.09),
                borderRadius: 2,
                borderWidth: 1,
                borderStyle: "solid",
                borderColor: alpha("#fff", 0.01),
              }}
            >
              Playlist
            </Typography>
          </Grid>
          {createVideoContainers(playlists)}
        </Grid>
      </Paper>
    </Box>
  );
}
