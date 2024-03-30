import GitHub from "./GitHub";
import LinkedIn from "./LinkedIn";
import X from "./X";

export { LinkedInURL } from "./LinkedIn";

import type { SxProps, Theme } from "@mui/material";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

export { default as GitHub } from "./GitHub";
export { default as LinkedIn } from "./LinkedIn";
export { default as X } from "./X";

export const defaultStackSize = { width: "100%", height: "100%" };
export const defaultBtnSize = { width: "auto", height: "100%" };
export const defaultIconSize = { width: "auto", height: "100%" };
export const defaultPadding = { x: 1, y: 1 };

export function StackedSocialLinks({
  direction,
  justify,
  color,
  stackSize,
  iconSx,
  btnSx,
}: {
  direction?: "row" | "column";
  justify?: "right" | "left" | "center";
  iconSize?: { width?: string | number; height?: string | number };
  btnSize?: { width?: string | number; height?: string | number };
  stackSize?: { width?: string | number; height?: string | number };
  color?: string;
  iconSx?: SxProps<Theme> | undefined;
  btnSx?: SxProps<Theme> | undefined;
}) {
  return (
    <Stack
      direction={direction ?? "row"}
      justifyContent={justify ?? "center"}
      spacing={0}
      useFlexGap
      sx={{
        color: color ?? "text.secondary",
        width: stackSize?.width ?? defaultStackSize.width,
        height: stackSize?.height ?? defaultStackSize.height,
      }}
    >
      <GitHub
        btnSx={{
          ...btnSx,
        }}
        iconSx={{
          ...iconSx,
        }}
      />
      <LinkedIn
        btnSx={{
          ...btnSx,
        }}
        iconSx={{
          ...iconSx,
        }}
      />
      <X
        btnSx={{
          ...btnSx,
        }}
        iconSx={{
          ...iconSx,
        }}
      />
    </Stack>
  );
}

export function GitHubLinkedin({
  spacing,
  boxSize,
  iconSx,
  btnSx,
}: {
  spacing?: number | string;
  boxSize?: { width?: string | number; height?: string | number };
  iconSx?: SxProps<Theme> | undefined;
  btnSx?: SxProps<Theme> | undefined;
}) {
  return (
    <>
      <Box
        id="githubLinkedinBox"
        pr={spacing}
        width={boxSize?.width}
        height={boxSize?.height}
      >
        <GitHub
          btnSx={{
            ...btnSx,
          }}
          iconSx={{
            ...iconSx,
          }}
        />
      </Box>
      <Box pl={spacing} width={boxSize?.width} height={boxSize?.height}>
        <LinkedIn
          btnSx={{
            ...btnSx,
          }}
          iconSx={{
            ...iconSx,
          }}
        />
      </Box>
    </>
  );
}
