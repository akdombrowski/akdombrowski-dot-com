import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Container from "@mui/material/Container";

import Image from "next/image";
import VIDEOS_TITLE_URL from "@/components/videos/VideoURLs";
import _ from "lodash";
import VideoContainer from "./VideoContainer";
function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function VideosQuilt() {
  const cols = 16;
  const rows = 6;
  return (
    <Container>
      <ImageList
        sx={{ width: "100%", height: "auto" }}
        variant="quilted"
        cols={cols * 4}
        // rowHeight={rows * 4}
        // gap={8}
      >
        {/* {itemData.map((item) => ( */}
        {VIDEOS_TITLE_URL.map((vid, i) => (
          <ImageListItem
            key={i}
            cols={cols}
            rows={rows}
          >
            <VideoContainer video={vid} />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
}
