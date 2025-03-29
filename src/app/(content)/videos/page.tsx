import LoadingVideo from "@/components/videos/LoadingVideo";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import dynamic from "next/dynamic";
import Link from "next/link";
import Button from "@mui/material/Button";
import SectionTitle from "@/components/videos/SectionTitle";

const Videos = dynamic(() => import("@/components/videos/Videos"), {
  loading: () => <LoadingVideo />,
});

export default function VideosPage() {
  return (
    <Container maxWidth={false}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        gap={5}
      >
        <Grid
          id="videosLayout-videosComponentGrid"
          size={{ xs: 12 }}
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          paddingX={0}
        >
          <Button
            component={Link}
            href="/videos/id-crisis"
            sx={{ padding: 0 }}
          >
            <SectionTitle title="ID Crisis" />
          </Button>
        </Grid>
        <Grid
          id="videosLayout-videosComponentGrid"
          size={{ xs: 12 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          paddingX={0}
        >
          <Videos />
        </Grid>
      </Grid>
    </Container>
  );
}
