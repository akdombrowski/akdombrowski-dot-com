import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Unstable_Grid2";

import AppAppBar from "@/components/AppAppBar";
import Hero from "./Hero";
import Videos from "@/components/videos/Videos";
import Highlights from "@/components/Highlights";
import Pricing from "@/components/Pricing";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
// import dynamic from "next/dynamic";

// const NoSSR = dynamic(() => import("@/components/Videos"), { ssr: false });

export default function LandingPage() {
  return (
    <Container
      id="landingPage"
      maxWidth={false}
      // sx={{ overflow: "hidden" }}
    >
      <Box width="100%">
        {/* <AppAppBar /> */}
        <Grid
          id="landingPage-grid"
          container
          rowSpacing={{ xs: 1, sm: 2, md: 3 }}
          disableEqualOverflow
        >
          <Grid
            id="LandingPage-HeroGridContainerWrapper"
            xs={12}
            display="flex"
            justifyContent="center"
            alignItems="center"
            paddingTop="3rem"
            // paddingBottom="3rem"
          >
            <Hero />
          </Grid>
          <Divider flexItem />
          <Grid
            id="videos"
            xs={12}
            display="flex"
            justifyContent="center"
            alignItems="center"
            paddingX={0}
          >
            <Videos />
          </Grid>
          {/* <Grid
          id="features"
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Features />
        </Grid>
        <Divider />
        <Grid
          id="testimonials"
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Testimonials />
        </Grid>
        <Divider />
        <Grid
          id="highlights"
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Highlights />
        </Grid>
        <Divider />
        <Grid
          id="highlights"
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Pricing />
        </Grid>
        <Divider />

        <Grid
          id="highlights"
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <FAQ />
        </Grid> */}

          <Divider />
          <Grid
            id="highlights"
            xs={12}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Footer />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
