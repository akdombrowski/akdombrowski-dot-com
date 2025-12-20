"use client";
import "client-only";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

export default function StatsBtn() {
  const onSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("submitted");
    const res = await fetch("/api/stats");
    console.log(await res.json());
  };

  return (
    <Grid
      container
      size={12}
      sx={{ p: 0 }}
    >
      <Grid size={{ xs: 12 }}>
        <Button onClick={onSubmit}>Fetch Stats</Button>
      </Grid>
    </Grid>
  );
}
