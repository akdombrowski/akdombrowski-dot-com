import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";

import VideoContainer from "@/components/videos/VideoContainer";
import { ID_CRISIS_SERIES } from "@/components/videos/VideoURLs";
import _ from "lodash";
import Typography from "@mui/material/Typography";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const FORM_PAGE_URL = {
  main: { url: "https://frontegg.com/identity-crisis-series" },
};

const idCrisis = _.find(ID_CRISIS_SERIES, (vid) => {
  console.log(vid);
  return vid.title.startsWith("Teaser Trailer");
})!;

console.log("\n\nidCrisis");
console.log(idCrisis);

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
          id="idCrisis-videoGridContainer"
          size={{ xs: 12 }}
          container
          justifyContent="flex-end"
          alignItems="stretch"
        >
          <Grid
            id="idCrisis-videoGridWrapper"
            size={{ xs: 12, lg: 10, xl: 8 }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <VideoContainer
              video={idCrisis}
              size={12}
              idPrefix={`idCrisis-${idCrisis.title.replaceAll(" ", "_")}`}
            />
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
