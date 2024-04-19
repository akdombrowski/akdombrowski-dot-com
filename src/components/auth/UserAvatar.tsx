import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Avatar from "@mui/material/Avatar";

export default function UserAvatar({
  src,
  width,
  height,
}: {
  src?: string;
  width?: string | number;

  height?: string | number;
}) {
  return (
    <Avatar
      alt="Remy Sharp"
      src={src}
      sx={{ width: width ?? 56, height: height ?? 56 }}
    />
  );
}
