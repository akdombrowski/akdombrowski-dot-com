import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SignUp from "@/components/SignUp";
import LoginBtn from "@/components/auth/LoginBtn";

export default function SignupPage() {
  return (
    <Grid
      container
      spacing={5}
    >
      <Grid
        size={12}
        container
        sx={{ justifyContent: "center" }}
      >
        <Typography variant="h2">Signup</Typography>
      </Grid>
      <Grid size={12}>
        <SignUp />
      </Grid>
      <Grid
        size={12}
        container
        sx={{ justifyContent: "center" }}
      >
        <Typography variant="h4">Or</Typography>
      </Grid>
      <Grid
        size={12}
        container
        sx={{ justifyContent: "center", alignItems: "stretch" }}
      >
        <LoginBtn provider="google" />
      </Grid>
    </Grid>
  );
}
