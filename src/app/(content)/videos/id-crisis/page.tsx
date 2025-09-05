import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";

import VideoContainer from "@/components/videos/VideoContainer";
import { ID_CRISIS_VIDS } from "@/components/videos/VideoURLs";
import _ from "lodash";
import Typography from "@mui/material/Typography";

import Link from "next/link";

const FORM_PAGE_URL = {
  main: { url: "https://frontegg.com/identity-crisis" },
};
export { FORM_PAGE_URL };
const idCrisisDemo = _.find(ID_CRISIS_VIDS, (vid) => {
  return vid.title.startsWith("ID");
})!;

export default function IDCrisisPage() {
  return (
    <Container
      id="idCrisisPageContainer"
      maxWidth={false}
      disableGutters
    >
      <Grid
        container
        size={12}
      >
        <Grid
          id="idCrisis-main-gridContainer"
          container
          justifyContent="space-between"
          alignItems="center"
          rowSpacing={{ xs: 3, sm: 2, md: 3 }}
        >
          <Grid
            id="titleBox"
            container
            justifyContent={"center"}
            alignItems="stretch"
          >
            <Grid
              id="idCrisis-videosBtnGridWrapper"
              size={{ xs: 12 }}
              display="flex"
              justifyContent="left"
              alignItems="stretch"
              maxHeight="50vh"
            >
              <Typography
                variant="poster"
                color="text.light"
              >
                Identitty Crisis
              </Typography>
              <Typography
                variant="poster"
                color="text.light"
              >
                :
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
                the making of a mascot.
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          id="idCrisis-gridContainer-videos"
          container
          size={{ xs: 12 }}
        >
          <Grid
            id="idCrisis-videoGridWrapper"
            size={{ xs: 12, sm: 5 }}
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
