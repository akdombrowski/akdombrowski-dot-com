import blogLinks from "@/components/blogs/bloglinks";
import { BlogPreview } from "@/components/blogs/BlogPreview";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";

export default function Blog() {
  const blogs = blogLinks();
  return blogs.map((blogLink) => {
    return (
      <Grid
        id="blog"
        size={{ xs: 12 }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        paddingX={0}
      >
        <BlogPreview blogLink={blogLink} />
      </Grid>
    );
  });
}
