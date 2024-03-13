import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import VideoContainer from "./VideoContainer";
import isClient from "./isClient";
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
    title: "Developer's Playlist",
    url: "https://www.youtube.com/embed/videoseries?si=9F-Chs7_Sy1o-14u&amp;list=PLtT9h6_TdgvZo6SssVfgW-N4Vik2ieh7x",
  },
  {
    title: "Try PingOne for Customers! You'll be Glad You Did.",
    url: "https://www.youtube.com/embed/ypa8prwEMcc?si=EibB5NHZkPrl7IG6",
  },
  {
    title: "",
    url: "https://www.youtube.com/embed/eg7I8x-u0sc?si=H1C7_IVkVNGMA9xi",
  },
  {
    title: "",
    url: "https://www.youtube.com/embed/",
  },
  {
    title: "",
    url: "https://www.youtube.com/embed/",
  },
  {
    title: "",
    url: "https://www.youtube.com/embed/",
  },
];

export default function Videos() {
  const getVideo = (video: VideoURLObj): string => {
    return video.url;
  };

  if (!isClient()) {
    return <Typography variant="h4">Loading...</Typography>;
  }

  return (
    <Grid
      id="videosContainer"
      container
      flexShrink={0}
      alignContent="space-between"
      // alignItems="stretch"
      justifyContent="center"></Grid>
  );
}
