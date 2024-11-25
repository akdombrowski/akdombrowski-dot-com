import Blog from "@/components/blogs/Blog";
import blogLinks from "@/components/blogs/bloglinks";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";

export default function Blogs() {
  const blogAndUrls = blogLinks();
  const blogs = blogAndUrls.map((blogLink) => {
    return (
      <Grid
        id="videosLayout-videosComponentGrid"
        size={{ xs: 4 }}
        display="flex"
        justifyContent="start"
        alignItems="start"
        paddingX={0}
      >
        <Blog blogLink={blogLink} />
      </Grid>
    );
  });

  return (
    <Container maxWidth={false}>
      <Grid container>{blogs}</Grid>
    </Container>
  );
}
