import Divider, { type DividerProps } from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import type { GridProps } from "@mui/material/Grid";

export interface SectionDividerProps {
  gridProps?: GridProps;
  dividerProps?: DividerProps;
}

export default function SectionDivider(props: SectionDividerProps) {
  const { gridProps, dividerProps } = props;

  return (
    <Grid {...gridProps}>
      <Divider {...dividerProps} />
    </Grid>
  );
}
