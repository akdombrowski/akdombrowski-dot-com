"use client";
import "client-only";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { type GridSize } from "@mui/system";
import type { VideoURLObj } from "@/components/videos/VideoURLs";
import { alpha } from "@mui/material/styles";

import Script from "next/script";

export default function VideoContainer({
  video,
  size,
  idPrefix,
  loadYouTubeAPIScript,
  onLoad,
  onReady,
  onError,
}: {
  video: VideoURLObj;
  size?: boolean | GridSize | undefined;
  idPrefix?: string;
  loadYouTubeAPIScript?: boolean;
  onLoad?: () => void;
  onReady?: () => void;
  onError?: () => void;
}) {
  return (
    <>
      {loadYouTubeAPIScript ?? (
        <Script
          src="https://www.youtube.com/iframe_api"
          strategy="lazyOnload"
          onLoad={onLoad}
          onReady={onReady}
          onError={onError}
        />
      )}
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
              loading="eager"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;fullscreen;"
              allowFullScreen
              style={{
                borderWidth: "1.5vmin",
                borderColor: alpha("#FFF", 0.1),
              }}
            />
          </Box>
        </Box>
      </Grid>
    </>
  );
}
