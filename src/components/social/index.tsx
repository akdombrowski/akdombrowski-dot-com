import GitHub from "./GitHub";
import LinkedIn from "./LinkedIn";
import X from "./X";

export { LinkedInURL } from "./LinkedIn";

import Stack from "@mui/material/Stack";

export { default as GitHub } from "./GitHub";
export { default as LinkedIn } from "./LinkedIn";
export { default as X } from "./X";

export const defaultStackSize = { width: "100%", height: "100%" };
export const defaultBtnSize = { width: "auto", height: "100%" };
export const defaultIconSize = { width: "auto", height: "100%" };
export const defaultPadding = { x: 1, y: 1 };

export function StackedSocialLinks(props: {
  direction?: "row" | "column";
  justify?: "right" | "left" | "center";
  iconSize?: { width?: string | number; height?: string | number };
  btnSize?: { width?: string | number; height?: string | number };
  stackSize?: { width?: string | number; height?: string | number };
}) {
  return (
    <Stack
      direction={props.direction ?? "row"}
      justifyContent={props.justify ?? "center"}
      spacing={0}
      useFlexGap
      sx={{
        color: "text.secondary",
        width: props?.stackSize?.width ?? defaultStackSize.width,
        height: props?.stackSize?.height ?? defaultStackSize.height,
      }}
    >
      <GitHub
        btnSize={{ width: props.btnSize?.width, height: props.btnSize?.height }}
      />
      <LinkedIn />
      <X />
    </Stack>
  );
}
