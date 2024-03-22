"use client";
import "client-only";

import { useState } from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import Grid from "@mui/material/Unstable_Grid2";

import { alpha } from "@mui/material/styles";
import { LinkedIn, GitHub, GitHubLinkedin } from "@/social";
import LogoAndPageSections from "./LogoAndPageSections";
import AppBarLogo from "./AppBarLogo";

function AppAppBar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
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
    <>
      <AppBar
        id="appBar"
        position="fixed"
        sx={{
          alignItems: "stretch",
          boxShadow: 10,
          backgroundColor: alpha("#000", 0.4),
        }}
      >
        <Container maxWidth={false}>
          <Toolbar
            variant="dense"
            disableGutters
            sx={{
              display: "flex",
              minHeight: "40px",
              maxHeight: "6vh",
              alignItems: "stretch",
              backgroundColor: alpha("#000", 0.8),
              backdropFilter: "blur(5px)",
              border: ".1rem solid",
              borderColor: "divider",
              boxShadow:
                "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
            }}
          >
            <Grid
              id="appbar-innerAppBarGridContainer"
              container
              justifyContent="space-between"
              alignItems="stretch"
              columnSpacing={{ xs: 1, md: 3 }}
              width="100%"
            >
              <Grid
                xs={1}
                id="appbar-logoGridContainer"
                flexGrow={0}
                flexShrink={0}
                display="flex"
                height="100%"
                justifyContent="center"
                alignItems="stretch"
              >
                <AppBarLogo />
              </Grid>
              <Grid
                id="appbar-pageSectionsGrid"
                xs={6}
                flexBasis={100}
                flexGrow={1}
                flexShrink={1}
                height="100%"
                display="flex"
                justifyContent="left"
                alignItems="center"
              >
                {LogoAndPageSections(scrollToSection)}
              </Grid>

              <Grid
                id="appbar-nameGrid"
                xs={3}
                flexBasis="fit-content"
                flexGrow={0}
                flexShrink={0}
                height="100%"
                display="flex"
                justifyContent="right"
                alignItems="center"
              >
                <Typography
                  variant="overline"
                  fontWeight={900}
                  color="text.primary"
                  overflow="hidden"
                  textOverflow="clip"
                  noWrap
                >
                  Anthony Dombrowski's Site
                </Typography>
              </Grid>

              <Grid
                id="appbar-socialLinksGrid"
                xs={1}
                flexBasis="fit-content"
                flexGrow={0}
                flexShrink={{ xs: 1, sm: 0 }}
                height="100%"
                display="flex"
                justifyContent="right"
                alignItems="center"
              >
                <GitHubLinkedin
                  spacing="1vw"
                  boxSize={{ width: "auto", height: "100%" }}
                  btnSize={{ width: "100%", height: "100%" }}
                />
              </Grid>

              <Grid
                id="appbar-drawerGrid"
                xs={1}
                display={{ sm: "flex", md: "none" }}
                justifyContent="right"
              >
                <Button
                  variant="text"
                  color="info"
                  aria-label="menu"
                  onClick={toggleDrawer(true)}
                  sx={{ minWidth: "30px", p: "4px" }}
                >
                  <MenuIcon />
                </Button>
                <Drawer
                  anchor="right"
                  open={open}
                  onClose={toggleDrawer(false)}
                >
                  <Box
                    sx={{
                      minWidth: "60vw",
                      p: 2,
                      backgroundColor: "background.paper",
                      flexGrow: 1,
                    }}
                  >
                    <MenuItem onClick={() => scrollToSection("Videos")}>
                      Videos
                    </MenuItem>
                    <MenuItem onClick={() => scrollToSection("Blogs")}>
                      Blogs
                    </MenuItem>
                    <MenuItem onClick={() => scrollToSection("highlights")}>
                      Highlights
                    </MenuItem>
                    <MenuItem onClick={() => scrollToSection("pricing")}>
                      Pricing
                    </MenuItem>
                    <MenuItem onClick={() => scrollToSection("faq")}>
                      FAQ
                    </MenuItem>
                    <Divider />
                  </Box>
                </Drawer>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>

      <Toolbar />
    </>
  );
}

export default AppAppBar;
