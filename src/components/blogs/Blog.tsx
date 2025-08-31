import type { IBlogLink } from "@/components/blogs/bloglinks";
import { BlogPreview } from "@/components/blogs/BlogPreview";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { CardHeader } from "@mui/material";

export interface IBlogProps {
  blogLink: IBlogLink;
}

export default function BlogCard(props: IBlogProps) {
  const { blogLink } = props;
  const { title, url } = blogLink;

  return (
    // <Grid
    // size={{ xs: 12 }}
    // display="flex"
    // justifyContent="center"
    // alignItems="center"
    // paddingX={0}
    // >
    <Card id="blog">
      <CardHeader title="article title here" />
      <CardContent>
        <Typography>use url to preview content...</Typography>
      </CardContent>
    </Card>
    // {/* <BlogPreview url={url} /> */}
    // </Grid>
  );
}
