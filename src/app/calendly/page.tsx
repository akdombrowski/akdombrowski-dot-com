import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import LoginBtn from "@/components/LoginBtn";
import { auth } from "@/auth";

export default async function CalendlyPage() {
  const session = await auth();

  return (
    <Container maxWidth={false}>
      <Grid
        id="calendly-GridContainer"
        container
        display="flex"
        justifyContent="center"
        alignItems="center"
        paddingX={0}
      >
        <Grid
          xs={12}
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
          <LoginBtn provider="Calendly"></LoginBtn>
        </Grid>
        <Grid
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography>{JSON.stringify(session)}</Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
