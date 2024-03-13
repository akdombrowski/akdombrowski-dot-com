"use client";
import "client-only";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function VideoContainer(props: { title?: string; url: string }) {
  return (
    <Grid
      flexGrow={0}
      xs={6}
      display="flex"
      height={(45 * 9) / 16 + "vw"}
      justifyContent="center"
    >
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
        <iframe
          width="100%"
          height="100%"
          src={props.url}
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </Box>
    </Grid>
  );
}
