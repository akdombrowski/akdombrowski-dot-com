import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import StatsBtn from "@/components/videos/StatsBtn";

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
          <StatsBtn></StatsBtn>
        </Grid>
      </Grid>
      <div>Videos: {slug}</div>
    </Container>
  );
}
