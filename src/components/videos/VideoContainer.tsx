"use client";
import "client-only";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import type { VideoURLObj } from "@/components/videos/VideoURLs";
import { alpha } from "@mui/material/styles";

export default function VideoContainer({
  video,
  size,
  idPrefix,
  justifyContent,
}: {
  video: VideoURLObj;
  size?: number;
  idPrefix?: string;
  justifyContent?: string;
}) {
  return (
    <Grid
      size={size}
      key={"video-" + video.title}
      flexGrow={0}
      p={0}
      display="flex"
      justifyContent={justifyContent ?? "center"}
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
            loading="eager"
            allow="web-share;fullscreen;"
            allowFullScreen
            style={{ borderWidth: "1.5vmin", borderColor: alpha("#FFF", 0.1) }}
          />
        </Box>
      </Box>
    </Grid>
  );
}
