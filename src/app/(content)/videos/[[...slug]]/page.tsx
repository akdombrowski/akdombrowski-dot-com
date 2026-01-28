import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import StatsBtn from "@/components/videos/StatsBtn";
import LoginBtn from "@/components/auth/LoginBtn";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // const onSubmit = async (e: { preventDefault: () => void; }) => {
  //   e.preventDefault();
  //   console.log("submitted");
  //   const res = await fetch("/api/stats");
  //   console.log(res.json());
  // };

  return (
    <Container maxWidth={false}>
      <Grid
        container
        size={12}
        sx={{ p: 0 }}
      >
        <Grid size={{ xs: 12 }}>
          <LoginBtn provider="google" />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <StatsBtn></StatsBtn>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Typography variant="h2">Videos: {slug}</Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
