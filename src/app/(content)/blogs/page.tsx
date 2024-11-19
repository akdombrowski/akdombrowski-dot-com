import Blog from "@/components/blogs/Blog";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";

export default function Blogs() {
  return (
    <Container maxWidth={false}>
      <Grid
        id="videosLayout-videosComponentGrid"
        size={{ xs: 12 }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        paddingX={0}
      >
        <Blog />
      </Grid>
    </Container>
  );
}
