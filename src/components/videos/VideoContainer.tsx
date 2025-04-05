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
  borderColor,
}: {
  video: VideoURLObj;
  size?: number;
  idPrefix?: string;
  justifyContent?: string;
  borderColor?: string;
}) {
  const replaceSpaces = (str?: string) => str?.replaceAll(" ", "_") || "x";

  return (
    <Grid
      size={size}
      key={"video-" + replaceSpaces(video.title)}
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
          id={idPrefix ? `${replaceSpaces(idPrefix)}-videoIFrameBox` : "videoIFrameBox"}
          maxWidth="100%"
          height="100%"
          sx={{ aspectRatio: 16 / 9 }}
        >
          <iframe
            id={
              video.title
                ? `${replaceSpaces(idPrefix)}-${encodeURIComponent(replaceSpaces(video.title))}-iframe`
                : `${replaceSpaces(idPrefix)}-iframe`
            }
            width="100%"
            height="100%"
            src={video.url}
            title="YouTube video player"
            loading="eager"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;fullscreen;"
            allowFullScreen
            style={{ borderWidth: "1.5vmin", borderColor: borderColor ?? alpha("#FFF", 0.05) }}
          />
        </Box>
      </Box>
    </Grid>
  );
}
