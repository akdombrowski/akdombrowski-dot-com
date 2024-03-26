import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";

import Videos from "@/components/videos/Videos"

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
