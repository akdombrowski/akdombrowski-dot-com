import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Roles from "@/components/Roles";
import StackOverflowBadge from "@/components/StackOverflowBadge";
import Hero from "../Hero";
import Footer from "@/components/Footer";

import TOC from "@/components/home/TOC";
import WakaTimeBadge from "../WakaTimeBadge";

export default function LandingPage() {
  return (
    
      <Grid id="landing-grid" container rowSpacing={{ xs: 0 }} height="100%">
        <Grid
          id="landing-heroGridWrapper"
          size={{ xs: 12 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          pt={{ seisHundo: 1.5, md: 2 }}
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
          container
          spacing={1}
          size={12}
          id="landing-badgesWrapper"
          justifyContent="center"
        >
          <Grid
            id="landing-stackOverflowBadgeGridWrapper"
            size="grow"
            paddingTop={1}
            paddingBottom={0}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <StackOverflowBadge />
          </Grid>
          <Grid
            id="landing-wakatimeBadgeGridWrapper"
            size="grow"
            paddingTop={1}
            paddingBottom={0}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <WakaTimeBadge />
          </Grid>
        </Grid>

        <Grid
          id="landing-badgesDividerWrapper"
          size={{ xs: 12 }}
          paddingY={1}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Divider
            sx={{ borderColor: "#11004A", borderWidth: "1px", width: "100%" }}
          />
        </Grid>
        <Grid
          id="landing-videosGridWrapper"
          container
          spacing={1}
          size={12}
          justifyContent="center"
          alignItems="center"
        >
          <TOC />
        </Grid>

        <Grid
          id="landing-videosDividerWrapper"
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
        <Grid id="footerPadding" size={12}>
          <Box></Box>
        </Grid>
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
  );
}
