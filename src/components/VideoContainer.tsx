import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/system";

export default function VideoContainer(props: {
  title?: string;
  url?: string;
  height?: number;
}) {
  return (
    <iframe
      width="100%"
      height="100%"
      src={props.url}
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  );
}
