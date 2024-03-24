"use client";
import "client-only";

import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import VideoContainer from "./VideoContainer";
import Box from "@mui/material/Box";
import { useTheme, alpha } from "@mui/material/styles";
import { VIDEOS_TITLE_URL, type VideoURLObj } from "./VideoURLs";
import _ from "lodash";
// import ReactPlayer from "react-player/youtube";
const numVideos = VIDEOS_TITLE_URL.length;
const standardsVideos = _.filter(VIDEOS_TITLE_URL, (video, i, arr) =>
  _.includes(video.tag, "standards"),
);
const postmanVideos = _.filter(VIDEOS_TITLE_URL, (video, i, arr) =>
  _.includes(video.tag, "postman"),
);
const awarenessVideos = _.filter(VIDEOS_TITLE_URL, (video, i, arr) =>
  _.includes(video.tag, "awareness"),
);
const playlists = _.filter(VIDEOS_TITLE_URL, (video, i, arr) =>
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

export default function Videos() {
  const theme = useTheme();

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

  const createVideoContainers = (videos: VideoURLObj[]) =>
    videos.map((video, i) => {
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
            <VideoContainer
              id={String(i)}
              title={video.title}
              url={video.url}
            />
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
