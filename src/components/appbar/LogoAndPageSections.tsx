"use client";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Unstable_Grid2";

export function LogoAndPageSections(
  scrollToSection: (sectionId: string) => void,
) {
  return (
    <Grid
      id="logoAndPageSections-gridContainer"
      container
      columns={12}
      width="100%"
      height="100%"
      flexWrap="nowrap"
      overflow="hidden"
      justifyContent="left"
      alignItems="stretch"
    >
      {/* Logo Image */}
      <Grid
        id="logoAndPageSections-logoImageGrid"
        xs={1}
        flexGrow={0}
        flexShrink={2}
        display="flex"
        height="100%"
        justifyContent="left"
        alignItems="stretch"
      >
        <Box
          sx={{ aspectRatio: 16 / 9 }}
          maxWidth="100%"
          height="100%"
          position="relative"
        >
          <Image
            src={"/gokart-R.png"}
            alt="logo of anthony dombrowski"
            objectFit="contain"
            style={{ overflow: "hidden" }}
            fill
          />
        </Box>
      </Grid>

      <Grid
        id="logoAndPageSections-pageSectionGrid"
        xs={6}
        height="100%"
        flexGrow={2}
        flexShrink={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          id="logoAndPageSections-pageSectionInnerGridContainer"
          container
          columns={3}
          spacing={0}
          flexWrap="nowrap"
          overflow="hidden"
          width="100%"
          height="100%"
          justifyContent="left"
          alignItems="stretch"
          columnSpacing={3}
        >
          <Grid
            xs={1}
            height="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <MenuItem
              onClick={() => scrollToSection("features")}
              sx={{ py: "6px", px: "12px" }}
            >
              <Typography variant="body1" color="text.primary">
                Videos
              </Typography>
            </MenuItem>
          </Grid>

          <Grid
            xs={1}
            height="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <MenuItem
              onClick={() => scrollToSection("testimonials")}
              sx={{ py: "6px", px: "12px" }}
            >
              <Typography variant="body1" color="text.primary">
                Blogs
              </Typography>
            </MenuItem>
          </Grid>

          <Grid
            xs={1}
            height="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <MenuItem
              onClick={() => scrollToSection("highlights")}
              sx={{ py: "6px", px: "12px" }}
            >
              <Typography variant="body1" color="text.primary">
                Highlights
              </Typography>
            </MenuItem>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
