import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import { StackedSocialLinks } from "@/components/social";
import Copyright from "@/components/Copyright";

export default function Footer() {
  return (
    <Container
      id="footer"
      maxWidth={false}
    >
      <Grid container id="footer-GridContainer" display="flex" justifyContent="space-around" alignItems="stretch" height="3rem">
        <Grid
          xs={8}
          id="footer-GridCopyright"
          display="flex"
          justifyContent="left"
          alignItems="stretch"
        >
          <Copyright />
        </Grid>
        <Grid
          xs={4}
          display="flex"
          justifyContent="right"
          id="footer-GridSocial"
          alignItems="stretch"
        >
          <StackedSocialLinks justify="right" color="#fff"/>
        </Grid>
      </Grid>
    </Container>
  );
}
