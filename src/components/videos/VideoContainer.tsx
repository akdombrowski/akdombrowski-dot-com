"use client";
import "client-only";

import Box from "@mui/material/Box";

export default function VideoContainer(props: {
  id: string;
  url: string;
  title?: string;
}) {
  return (
    <Box maxWidth="100%" height="100%" sx={{ aspectRatio: 16 / 9 }}>
      <iframe
        id={
          props.title
            ? `${props.id}-${encodeURIComponent(props.title)}-iframe`
            : `${props.id}-iframe`
        }
        width="100%"
        height="100%"
        src={props.url}
        title="YouTube video player"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </Box>
  );
}
