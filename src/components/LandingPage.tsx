import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Unstable_Grid2";

import Roles from "@/components/Roles";
import Hero from "./Hero";
import Videos from "@/components/videos/Videos";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <Container id="landingPage" maxWidth={false}>
      <Box width="100%">
        {/* <AppAppBar /> */}
        <Grid
          id="Landing-grid"
          container
          rowSpacing={{ xs: 1, sm: 2, md: 3 }}
          disableEqualOverflow
        >
          <Grid
            id="Landing-HeroGridContainerWrapper"
            xs={12}
            display="flex"
            justifyContent="center"
            alignItems="center"
            paddingTop="2rem"
          >
            <Hero />
          </Grid>

          <Grid
            id="Landing-HeroDividerWrapper"
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
            id="Landing-Hero2DividerWrapper"
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
            id="Landing-RolesGridContainerWrapper"
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
            id="Landing-RolesDividerWrapper"
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
            id="videos"
            xs={12}
            display="flex"
            justifyContent="center"
            alignItems="center"
            paddingX={0}
          >
            <Videos />
          </Grid>

          <Divider />

          <Grid
            id="Landing-Footer"
            xs={12}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Footer />
          </Grid>
          <Grid xs={12}>
            <Box height="1vh"/>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
