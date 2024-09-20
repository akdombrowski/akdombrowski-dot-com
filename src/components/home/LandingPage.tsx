import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid2";

import Roles from "@/components/Roles";
import StackOverflowBadge from "@/components/StackOverflowBadge";
import Hero from "../Hero";
import Footer from "@/components/Footer";

import TOC from "@/components/home/TOC";
import WakaTimeBadge from "../WakaTimeBadge";

export default function LandingPage() {
  return (
    <Container id="landingPage" maxWidth={false} disableGutters>
      <Grid
        id="landing-grid"
        container
        rowSpacing={{ xs: 1, sm: 2, md: 3 }}
        disableEqualOverflow
      >
        <Grid
          id="landing-heroGridWrapper"
          size={{ xs: 12 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          pt={{ xs: 0.5, seisHundo: 1.5, md: 2 }}
        >
          <Hero variant="title" />
        </Grid>

        <Grid
          id="landing-heroDividerWrapper"
          size={{ xs: 12 }}
          paddingTop={1}
          paddingBottom={0}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Divider
            sx={{ borderColor: "#11004A", borderWidth: "1px", width: "100%" }}
          />
        </Grid>

        <Grid
          id="landing-Hero2DividerWrapper"
          size={{ xs: 12 }}
          paddingTop=".1rem"
          paddingBottom={0}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Divider
            sx={{ borderColor: "#11004A", borderWidth: "1px", width: "100%" }}
          />
        </Grid>

        <Grid
          id="landing-rolesGridWrapper"
          size={{ xs: 12 }}
          paddingTop={1}
          paddingBottom={0}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Roles />
        </Grid>

        <Grid
          id="landing-rolesDividerWrapper"
          size={{ xs: 12 }}
          paddingY={0}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Divider
            sx={{ borderColor: "#11004A", borderWidth: "1px", width: "100%" }}
          />
        </Grid>

        <Grid
          id="landing-stackOverflowBadgeGridWrapper"
          size={{ xs: 6 }}
          paddingTop={1}
          paddingBottom={0}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <StackOverflowBadge />
        </Grid>
        <Grid
          id="landing-stackOverflowBadgeGridWrapper"
          size={{ xs: 6 }}
          paddingTop={1}
          paddingBottom={0}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <WakaTimeBadge />
        </Grid>

        <Grid
          id="landing-videosGridWrapper"
          size={{ xs: 12 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          pb={6}
        >
          <TOC />
        </Grid>

        <Divider />

        <Grid
          id="landing-footerGridWrapper"
          size={{ xs: 12 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}
