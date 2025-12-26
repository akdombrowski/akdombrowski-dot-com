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
  const cols = 3;
  const numVids = VIDEOS_TITLE_URL.length;
  const rows = Math.ceil(numVids / cols);

  return (
    <Container
      id="videosQuilt-container"
      maxWidth={"xl"}
    >
      <ImageList
        id="imageList"
        sx={{ width: "100%", height: "auto" }}
        variant="quilted"
        cols={cols}
        rowHeight={"auto"}
        gap={0}
      >
        {/* {itemData.map((item) => ( */}
        {VIDEOS_TITLE_URL.map((vid, i) => (
          <ImageListItem
            key={i}
            // cols={cols / 2 + (_.random(1024) % cols) / 2}
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
