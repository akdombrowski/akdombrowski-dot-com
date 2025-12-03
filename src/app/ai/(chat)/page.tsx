import LoadingVideo from "@/components/videos/LoadingVideo";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import dynamic from "next/dynamic";
import Link from "next/link";
import Button from "@mui/material/Button";
import SectionTitle from "@/components/videos/SectionTitle";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";

export default function AIPage() {
  return (
    <Container maxWidth={false}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        gap={5}
      >
        <Grid
          id="videosLayout-videosComponentGrid1"
          container
          size={{ xs: 3 }}
          justifyContent="left"
          alignItems="stretch"
        >
          <Grid
            size={12}
            justifyContent="left"
            alignItems="stretch"
          >
            <i className="fa-sharp fa-solid fa-user"></i>
          </Grid>
          <Grid
            size={12}
            justifyContent="left"
            alignItems="stretch"
          >
            <Typography align="left">Buttoned-Up</Typography>
          </Grid>
        </Grid>
        <Grid
          id="videosLayout-videosComponentGrid2"
          container
          size={{ xs: 3 }}
          justifyContent="center"
          alignItems="stretch"
        >
          <Typography>Comfort Zone</Typography>
        </Grid>
        <Grid
          id="videosLayout-videosComponentGrid2"
          container
          size={{ xs: 3 }}
          justifyContent="right"
          alignItems="stretch"
        >
          <Grid
            size={12}
            justifyContent="right"
            alignItems="stretch"
          >
            <TheaterComedyIcon
              fontSize="large"
              color="success"
            />
          </Grid>
          <Grid
            size={12}
            justifyContent="right"
            alignItems="stretch"
          >
            <Typography align="right">Wild</Typography>
          </Grid>
        </Grid>
        <Grid
          container
          size={12}
        >

        </Grid>
      </Grid>
    </Container>
  );
}
