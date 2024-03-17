import GitHub from "./GitHub";
import LinkedIn from "./LinkedIn";
import X from "./X";

import Stack from "@mui/material/Stack";

export { default as GitHub } from "./GitHub";
export { default as LinkedIn } from "./LinkedIn";
export { default as X } from "./X";

export function StackedSocialLinks(props: {
  direction?: "row" | "column";
  justify?: "right" | "left" | "center";
}) {
  return (
    <Stack
      direction={props.direction ?? "row"}
      justifyContent={props.direction ?? "left"}
      spacing={0}
      useFlexGap
      sx={{
        color: "text.secondary",
      }}
    >
      <GitHub />
      <LinkedIn />
      <X />
    </Stack>
  );
}
