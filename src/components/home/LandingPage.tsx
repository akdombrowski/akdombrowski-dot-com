import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Roles from "@/components/Roles";
import Hero from "../Hero";
import Footer from "@/components/Footer";

import TOC from "@/components/home/TOC";
import SectionDivider from "./SectionDivider";
import VideosQuilt from "@/components/videos/VideosQuilt";

export default function LandingPage() {
  return (
    <Container
      id="landing-container"
      maxWidth={false}
      disableGutters
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "stretch",
        height: "100%",
      }}
    >
      <Grid
        id="landing-gridContainer"
        container
        rowSpacing={{ xs: 0 }}
      >
        <Grid
          id="landing-headerGridWrapper"
          container
          size={{ xs: 12 }}
          justifyContent="center"
          alignItems="center"
          display="flex"
          sx={{ outline: "2rem ridge #0400ff2e" }}
          zIndex={1}
        >
          <Hero
            variant="title"
            id="landing-hero"
            size={{ xs: 9 }}
            display="flex"
            justifyContent="center"
            alignItems="center"
            p={0}
          />

          <SectionDivider
            gridProps={{
              id: "landing-divider1",
              size: { xs: 12 },
              paddingTop: 0,
              paddingBottom: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: "1",
            }}
            dividerProps={{ sx: { borderColor: "#11004A", borderWidth: "5px", width: "100%" } }}
          />

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
        </Grid>

        <Grid
          id="landing-rolesDividerWrapper"
          size={{ xs: 12 }}
          paddingY={0}
          display="flex"
          justifyContent="center"
          alignItems="center"
          zIndex={100}
        >
          <Divider
            sx={{
              zIndex: "100",
              borderColor: "#11004A",
              borderWidth: "1px",
              width: "100%",
            }}
          />
        </Grid>

        <Grid
          id="landing-badgesDividerWrapper"
          size={{ xs: 12 }}
          pt={0}
          pb={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Divider sx={{ borderColor: "#11004A", borderWidth: "3px", width: "100%" }} />
        </Grid>

        <Grid
          id="landing-videosQuiltGridWrapper"
          container
          spacing={1}
          size={12}
          justifyContent="center"
          alignItems="center"
        >
          <VideosQuilt />
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
          <Divider sx={{ borderColor: "#11004A", borderWidth: "1px", width: "100%" }} />
        </Grid>
        <Grid
          id="footerPadding"
          size={12}
        >
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
    </Container>
  );
}
