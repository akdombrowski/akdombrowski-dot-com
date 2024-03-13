"use client";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import VideoContainer from "./VideoContainer";
// import ReactPlayer from "react-player/youtube";
// import NextVideoPlayer from "next-video";

export interface VideoURLObj {
  title: string;
  url: string;
}

const VIDEO_URL_OBJS: VideoURLObj[] = [
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
  const [isClient, setIsClient] = useState(false);
  const [vwPX, setVWPX] = useState(1920 * 0.01);
  const [vhPX, setVHPX] = useState(1080 * 0.01);

  const calcWidthAndHeightPX = () => {
    const w = window.innerWidth * 0.01;
    const h = window.innerHeight * 0.01;

    if (w && Math.abs(w - vwPX) / vwPX > 0.1) {
      setVWPX(w);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      calcWidthAndHeightPX();
    });
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      calcWidthAndHeightPX();
    }
  });

  const getVideoURL = (video: VideoURLObj): string => {
    return video.url;
  };
  if (!isClient) {
    <Typography variant="h4">Loading...</Typography>;
  }

  return (
    <Grid
      id="videosContainer"
      container
      flexShrink={0}
      alignContent="space-between"
      // alignItems="stretch"
      justifyContent="center">
      <Grid
        flexGrow={0}
        xs={6}
        display="flex"
        height={(45 * 9) / 16 + "vw"}
        justifyContent="center">
        {/* <Box
          >
          height={(50 * 9) / 16 + "vh"}
          // minHeight=""
          sx={{ aspectRatio: 16 / 9 }}
          // maxHeight="55vh"
          sx={{ aspectRatio: 16 / 9 }}>
          <VideoContainer url={VIDEO_URLS[0].url} />
          </Box>
          <Box
          height={(50 * 9) / 16 + "vh"}
          // minHeight=""
          // maxHeight="55vh"
          sx={{ aspectRatio: 16 / 9 }}>
          <VideoContainer url={VIDEO_URLS[1].url} />
        </Box> */}
        <Box maxWidth="100%" height="100%" sx={{ aspectRatio: 16 / 9 }}>
          <VideoContainer url={VIDEO_URLS[0].url} />
        </Box>
        {/* <VideoContainer url={VIDEO_URLS[1].url} /> */}
        {/* {/* <Box height="20vh">
        </Box> */}
      </Grid>
      <Grid
        flexGrow={1}
        xs={6}
        display="flex"
        justifyContent="center"
        height={(45 * 9) / 16 + "vw"}>
        <Box maxWidth="100%" height="100%" sx={{ aspectRatio: 16 / 9 }}>
          <VideoContainer url={VIDEO_URLS[1].url} />
        </Box>
      </Grid>
    </Grid>
  );
}
