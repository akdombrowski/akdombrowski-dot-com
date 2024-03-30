"use client";
import "client-only";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { type GridSize } from "@mui/system";
import type { VideoURLObj } from "@/components/videos/VideoURLs";

export default function VideoContainer({
  video,
  size,
  idPrefix,
}: {
  video: VideoURLObj;
  size?: boolean | GridSize | undefined;
  idPrefix?: string;
}) {
  return (
    <Grid
      xs={size}
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
        <Box
          id={`${idPrefix}-videoIFrameBox`}
          maxWidth="100%"
          height="100%"
          sx={{ aspectRatio: 16 / 9 }}
        >
          <iframe
            id={
              video.title
                ? `${idPrefix}-${encodeURIComponent(video.title)}-iframe`
                : `${idPrefix}-iframe`
            }
            width="100%"
            height="100%"
            src={video.url}
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </Box>
      </Box>
    </Grid>
  );
}
