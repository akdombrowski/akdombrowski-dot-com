import type { IBlogLink } from "@/components/blogs/bloglinks";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";

export interface IBlogPreviewProps {
  blogLink: IBlogLink;
}

export function BlogPreview(props: IBlogPreviewProps) {
  const { blogLink } = props;

  return (
    <Grid
      id="blogPreview"
      size={{ xs: 12 }}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Typography>{blogLink.title}</Typography>
    </Grid>
  );
}
