import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";

import VideoContainer from "@/components/videos/VideoContainer";
import { KAPTCHA_ME_VIDEOS } from "@/components/videos/VideoURLs";
import _ from "lodash";
import Typography from "@mui/material/Typography";

import Link from "next/link";

const FORM_PAGE_URL = {
  main: { url: "https://frontegg.com/identity-crisis" },
};
export { FORM_PAGE_URL };
const idCrisisDemo = _.find(KAPTCHA_ME_VIDEOS, (vid) => {
  return vid.title.startsWith("kaptcha-me demo");
})!;

export default function IDCrisisPage() {
  return (
    <Container
      id="idCrisisPage"
      maxWidth={false}
      disableGutters
    >
      <Grid
        id="idCrisis-main-gridContainer"
        container
        justifyContent="space-between"
        alignItems="center"
        rowSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid
          id="titleBox"
          container
          justifyContent={"center"}
          alignItems="stretch"
        >
          <Grid
            id="idCrisis-videosBtnGridWrapper"
            size={{ xs: "auto" }}
            display="flex"
            justifyContent="left"
            alignItems="stretch"
            maxHeight="50vh"
          >
            <Typography
              variant="poster"
              color="text.light"
            >
              ID Crisis
            </Typography>
          </Grid>
          <Grid
            id="idCrisis-videosBtnGridWrapper"
            size={{ xs: "auto" }}
            display="flex"
            justifyContent="left"
            alignItems="stretch"
            maxHeight="50vh"
          >
            <Typography
              variant="poster"
              color="text.light"
            >
              The making of a mascot.
            </Typography>
          </Grid>
        </Grid>

        <Grid
          size={{ xs: "auto" }}
          container
          justifyContent="center"
          alignItems="stretch"
        >
          <Grid size={{ xs: 2 }} />

          <Grid
            id="idCrisis-videoGridWrapper-gif"
            size={{ xs: "auto" }}
            flexGrow={5}
            display="flex"
            justifyContent="center"
          >
            <Box
              component={Link}
              href=""
              height="100%"
              maxWidth="100%"
              sx={{
                aspectRatio: 720 / 480,
                backgroundImage: "url(/idCrisisGoKart.gif)",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            ></Box>
          </Grid>

          <Grid
            size={{ xs: "auto" }}
            flexShrink={2}
          />

          <Grid
            id="idCrisis-videoGridWrapper-demo"
            size={{ xs: 4, sm: 5 }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              width="100%"
              maxHeight="100%"
            >
              <VideoContainer
                video={idCrisisDemo}
                size={12}
              />
            </Box>
          </Grid>

          <Grid
            size={{ xs: "auto" }}
            flexShrink={2}
          />
        </Grid>

        <Grid
          id="idCrisis-dividerWrapper"
          size={{ xs: 12 }}
          py={6}
          display="flex"
          justifyContent="center"
          alignItems="stretch"
        >
          <Divider
            variant="fullWidth"
            sx={{ borderColor: "#132FAA", borderWidth: "1px", width: "100%" }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
