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
