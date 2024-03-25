import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";

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
