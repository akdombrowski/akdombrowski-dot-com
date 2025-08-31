import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
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
        px={0}
        pt={3}
      >
        <Grid
          size={{ xs: 12 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            component="span"
            variant="h3"
            display="inline"
            fontWeight={300}
          >
            Login to see your
            <Typography
              display="inline"
              variant="h2"
              fontWeight={900}
              px={2}
            >
              Calendly
            </Typography>
            scheduling link
          </Typography>
        </Grid>
        <Grid
          size={{ xs: 12 }}
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
