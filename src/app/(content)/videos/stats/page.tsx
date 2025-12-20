import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AuthorizeBtn from "../../../../components/auth/AuthorizeBtn";
import StatsBtn from "../../../../components/videos/StatsBtn";

export default function StatsPage() {
  return (
    <Grid
      container
      size={12}
    >
      <Grid size={12}>
        <Typography variant="h2">Stats</Typography>
      </Grid>
      <Grid size={6}>
        <StatsBtn />
      </Grid>
      <Grid size={6}>
        <AuthorizeBtn />
      </Grid>
    </Grid>
  );
}
