"use client";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useState } from "react";

import Videos from "@/components/videos/Videos";
import getYouTubeStats from "@/actions/youtube/ytDataAPI";
import { fetchStatsAll } from "@/db/supabase/youtubeVideos/db";
// await fetchStatsAll();
export default function VideosPage() {
  const [data, setData] = useState<string | null>(null);

  return (
    <Container maxWidth={false}>
      <Grid
        id="videosPage-mainGrid"
        container
        justifyContent="center"
        alignItems="center"
        rowSpacing={20}
      >
        <Grid
          id="videosPage-apiTestingGrid"
          xs={12}
          container
          display="flex"
          justifyContent="center"
          alignItems="center"
          rowSpacing={1}
        >
          <Grid xs={4}>
            <Typography variant="poster">Test</Typography>
          </Grid>
          <Grid xs height="100%">
            <Button
              variant="contained"
              fullWidth
              onClick={async () => {
                const stats = await getYouTubeStats();
                console.log(JSON.stringify(stats, null, 2));
                setData(JSON.stringify(stats, null, 2));
              }}
            >
              Test API
            </Button>
          </Grid>
          <Grid xs={12} height="50vh" overflow="auto">
            <Typography
              variant="h4"
              component="pre"
              maxWidth="100%"
              maxHeight="100%"
              whiteSpace="pre-wrap"
              align="left"
            >
              {data ?? "data"}
            </Typography>
          </Grid>
        </Grid>
        <Grid
          id="videosPage-videosComponentGrid"
          xs={12}
          container
          display="flex"
          justifyContent="center"
          alignItems="center"
          paddingX={0}
        >
          <Videos />
        </Grid>
      </Grid>
    </Container>
  );
}
