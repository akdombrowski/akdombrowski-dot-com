import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";

import Videos from "@/components/videos/Videos";
import getYouTubeStats from "@/actions/youtube/getYouTubeStats";
import { fetchStatsAll } from "@/db/supabase/dbYouTube";
await getYouTubeStats();
await fetchStatsAll();
export default function VideosPage() {
  return (
    <Container maxWidth={false}>
      <Grid
        id="videosLayout-videosComponentGrid"
        xs={12}
        display="flex"
        justifyContent="center"
        alignItems="center"
        paddingX={0}
      >
        <Videos />
      </Grid>
    </Container>
  );
}
