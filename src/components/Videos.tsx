"use client";
import "client-only";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Typography from "@mui/material/Typography";
import VideoContainer from "./VideoContainer";
import isClient from "./isClient";
import getYouTubeStats from "../actions/getYouTubeStats";
// import ReactPlayer from "react-player/youtube";
// import NextVideoPlayer from "next-video";

export interface VideoURLObj {
  title: string;
  url: string;
}

const VIDEOS_TITLE_URL: VideoURLObj[] = [
  {
    title: "OAuth 2.0: Implicit, Authorization Code, and PKCE",
    url: "https://www.youtube.com/embed/fX5U50VGxtg?si=d2oguHaC6vzlqIFY",
  },
  {
    title: "Postman Twitch Stream",
    url: "https://www.youtube.com/embed/sfUjJx6yRAI?si=v0q88zH_cVlkSrHq",
  },
  {
    title:
      "What are the OAuth 2.0 Grant Type Flows? First up, Authorization Code",
    url: "https://www.youtube.com/embed/eg7I8x-u0sc?si=H1C7_IVkVNGMA9xi",
  },
  {
    title: "Visualizing the OAuth Flow and Why PKCE is Needed",
    url: "https://www.youtube.com/embed/_zWovo2zv6k",
  },
  {
    title: "Try PingOne for Customers! You'll be Glad You Did.",
    url: "https://www.youtube.com/embed/ypa8prwEMcc?si=EibB5NHZkPrl7IG6",
  },
  {
    title: "Learn About the PingOne for Customers Developer Community",
    url: "https://www.youtube.com/embed/D-yskqXigZQ",
  },
  {
    title:
      "Ping Identity and Postman Team Up to Show You How to Upload Your API to the API Network",
    url: "https://www.youtube.com/embed/T0F5hqXxGOk",
  },
  {
    title:
      "Don't Make Things Harder By Wearing Too Many Hats, PingOne for Customers Can Handle It",
    url: "https://www.youtube.com/embed/PJMjHLzD_Kg",
  },
  {
    title:
      "Use Postman Environments to Speed Up and Make API Development Easier",
    url: "https://www.youtube.com/embed/IdtBkGQg2Q8",
  },
  {
    title: "The Great Developer Race",
    url: "https://www.youtube.com/embed/PeZ-Fz_soFs",
  },
  {
    title: "Postman and Ping Identity Twitch Stream",
    url: "https://www.youtube.com/embed/1hs5e7TDwM4",
  },
  {
    title: "One Remote for all of your CIAM Solutions",
    url: "https://www.youtube.com/embed/2Mkzy3ZWT6Q",
  },
  {
    title: "A Quick Guide on the PingOne for Customers Administrative Console",
    url: "https://www.youtube.com/embed/fCbW1YFnm6M",
  },
  {
    title: "Developer's Playlist",
    url: "https://www.youtube.com/embed/videoseries?si=9F-Chs7_Sy1o-14u&amp;list=PLtT9h6_TdgvZo6SssVfgW-N4Vik2ieh7x",
  },
];

export default function Videos() {
  const createVideoContainers = VIDEOS_TITLE_URL.map((video) => {
    return (
      <VideoContainer
        key={video.title + "video"}
        title={video.title}
        url={video.url}
      />
    );
  });

  if (!isClient()) {
    return <Typography variant="h4">Loading...</Typography>;
  }

  return (
    <Grid
      id="videosContainer"
      container
      spacing={6}
      flexShrink={0}
      alignContent="space-between"
      // alignItems="stretch"
      justifyContent="center">
      {createVideoContainers}
    </Grid>
  );
}
