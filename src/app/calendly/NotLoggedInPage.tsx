import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import LoginBtn from "@/components/auth/LoginBtn";

export default async function NotLoggedInPage() {
  return (
    <Container maxWidth={false}>
      <Grid
        id="calendly-GridContainer"
        container
        spacing={6}
        display="flex"
        justifyContent="center"
        alignItems="center"
        paddingX={0}
      >
        <Grid
          xs="auto"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography>Login to see your embedded calendar link</Typography>
        </Grid>
        <Grid
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <LoginBtn provider="Calendly" />
        </Grid>
      </Grid>
    </Container>
  );
}
