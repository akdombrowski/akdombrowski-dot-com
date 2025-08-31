import type { IBlogLink } from "@/components/blogs/bloglinks";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export interface IBlogPreviewProps {
 url: string;
}

export function BlogPreview(props: IBlogPreviewProps) {
  const { url } = props;

  return (
    <Grid
      id="blogPreview"
      size={{ xs: 12 }}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Typography>{url}</Typography>
    </Grid>
  );
}
