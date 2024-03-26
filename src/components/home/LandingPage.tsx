import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Unstable_Grid2";

import Roles from "@/components/Roles";
import StackOverflowBadge from "@/components/StackOverflowBadge";
import Hero from "../Hero";
import Footer from "@/components/Footer";

import TOC from "@/components/home/TOC";

export default function LandingPage() {
  return (
    <Container id="landingPage" maxWidth={false}>
      <Grid
        id="landing-grid"
        container
        rowSpacing={{ xs: 1, sm: 2, md: 3 }}
        disableEqualOverflow
      >
        <Grid
          id="landing-heroGridWrapper"
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
          pt={{ xs: 0.5, seisHundo: 1.5, md: 2 }}
        >
          <Hero variant="title" />
        </Grid>

        <Grid
          id="landing-heroDividerWrapper"
          xs={12}
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
          xs={12}
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
          xs={12}
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
          xs={12}
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
          xs={12}
          paddingTop={1}
          paddingBottom={0}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <StackOverflowBadge />
        </Grid>

        <Grid
          id="landing-videosGridWrapper"
          xs={12}
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
          xs={12}
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