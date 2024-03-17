import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";

const defaultLogoSize = { width: "5vmin", height: "5vmin" };
const defaultPadding = { x: 1, y: 1 };



export default function GitHub(props: {
  padding?: { x?: string | number; y?: string | number };
  size?: { width?: string | number; height?: string | number };
}) {
  return (
    <IconButton
      color="inherit"
      href="https://github.com/akdombrowski"
      component={Link}
      aria-label="GitHub profile link with username akdombrowski"
      sx={{
        alignSelf: "center",
        px: props?.padding?.x ?? defaultPadding.x,
        py: props?.padding?.y ?? defaultPadding.y,
      }}
    >
      <GitHubIcon
        sx={{
          width: props?.size?.width ?? defaultLogoSize.width,
          height: props?.size?.height ?? defaultLogoSize.height,
        }}
      />
    </IconButton>
  );
}
