"use client";
import "client-only";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

export default function VideoContainer(props: { title?: string; url: string }) {
  return (
    // <Box maxWidth="100%" height="100%" sx={{ aspectRatio: 16 / 9 }}>
    <iframe
      width="100%"
      height="100%"
      src={props.url}
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
    // </Box>
  );
}
