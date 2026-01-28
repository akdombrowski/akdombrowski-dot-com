"use client";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Container from "@mui/material/Container";
import { useMediaQuery, useTheme } from "@mui/material";

import _ from "lodash";

import VIDEOS_TITLE_URL from "@/components/videos/VideoURLs";
import VideoContainer from "@/components/videos/VideoContainer";

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function VideosQuilt() {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  const isLarge = useMediaQuery(theme.breakpoints.down("lg"));

  const cols = isSmall ? 1 : isMedium ? 2 : isLarge ? 3 : 4;

  return (
    <Container
      id="videosQuilt-container"
      maxWidth={false}
    >
      <ImageList
        id="imageList"
        sx={{ width: "100%", height: "auto" }}
        cols={cols}
        rowHeight={"auto"}
        gap={0}
      >
        {VIDEOS_TITLE_URL.map((vid, i) => (
          <ImageListItem
            key={i}
            cols={1}
            rows={1}
          >
            <VideoContainer video={vid} />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
}
