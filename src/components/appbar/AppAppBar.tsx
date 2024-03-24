"use client";
import "client-only";

import { useState, type SyntheticEvent } from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import Grid from "@mui/material/Unstable_Grid2";

import { alpha, useTheme } from "@mui/material/styles";
import { GitHubLinkedin } from "@/social";
import PageSections from "@/components/appbar/PageSections";
import AppBarLogo from "@/components/appbar/AppBarLogo";
function AppAppBar() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (event: SyntheticEvent) => {
    event.preventDefault();
    const id = event.currentTarget.id;
    // This event should come from a MenuItem wrapper with an id of the form
    // "{sectionID}-menuItem"
    const sectionID = id.split("-")[0];
    const sectionElement = document.getElementById(sectionID);
    const offset = window.innerHeight * 0.01;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
      setOpen(false);
    }
  };

  return (
    <AppBar
      id="appBar"
      position="fixed"
      sx={{
        top: 0,
        left: 0,
        width: "100vw",
        boxShadow: 10,
      }}
    >
      <Toolbar
        id="appBar-toolbar"
        variant="dense"
        sx={{
          display: "flex",
          minHeight: 45,
          flexBasis: "max-content",
          alignItems: "stretch",
          backgroundColor: alpha("#000", 0.1),
          backdropFilter: "blur(25px)",
          borderWidth: "0 0 1px 0",
          borderStyle: "solid",
          borderColor: alpha(theme.palette.divider2.light, 0.05),
          boxShadow:
            "0 10px 20px -15px rgba(0, 0, 0, 1), 5px 10px 20px -10px rgba(0, 0, 0, 1), -5px 10px 20px -10px rgba(0, 0, 0, 1),"
        }}
      >
        <Grid
          id="appbar-toolbarComponentsGridContainer"
          container
          justifyContent="space-between"
          alignItems="stretch"
          flexWrap="nowrap"
          columnSpacing={{ xs: 1, md: 3 }}
          width="100%"
        >
          <Grid
            xs={1}
            id="appbar-logoGridContainer"
            display="flex"
            height="100%"
            justifyContent="center"
            alignItems="stretch"
          >
            <AppBarLogo />
          </Grid>
          <Grid
            id="appbar-pageSectionsGrid"
            xs={0}
            seisHundo={9}
            flexGrow={{ xs: 0, seisHundo: 1 }}
            p={0}
            display={{ xs: "none", seisHundo: "flex" }}
            justifyContent="space-around"
            alignItems="stretch"
          >
            <PageSections scrollToSection={scrollToSection} />
          </Grid>

          <Grid
            id="appbar-drawerGrid"
            xs={9}
            seisHundo={0}
            flexGrow={{ xs: 1, seisHundo: 0 }}
            pl={2}
            display={{ xs: "flex", seisHundo: "none" }}
            justifyContent="left"
            alignItems="stretch"
          >
            <Button
              variant="text"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{
                color: theme.palette.success.light,
                minWidth: "30px",
                p: "4px",
              }}
            >
              <MenuIcon />
            </Button>
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
              <Box
                sx={{
                  minWidth: "60vw",
                  p: 2,
                  backgroundColor: "background.paper",
                  flexGrow: 1,
                }}
              >
                <MenuItem id="videos-menuItem" onClick={scrollToSection}>
                  Videos
                </MenuItem>
                <MenuItem id="blogs-menuItem" onClick={scrollToSection}>
                  Blogs
                </MenuItem>
                <MenuItem id="highlights-menuItem" onClick={scrollToSection}>
                  Highlights
                </MenuItem>
                <Divider />
              </Box>
            </Drawer>
          </Grid>

          <Grid
            id="appbar-socialLinksGrid"
            xs={2}
            flexBasis="max-content"
            px={0}
            height="100%"
            display="flex"
            justifyContent="right"
            alignItems="center"
          >
            <GitHubLinkedin
              spacing=".1vw"
              boxSize={{ width: "auto", height: "100%" }}
              btnSize={{ width: "100%", height: "100%" }}
              color="#fff"
            />
          </Grid>
        </Grid>
      </Toolbar>
      {/* </Container> */}
    </AppBar>
  );
}

export default AppAppBar;
