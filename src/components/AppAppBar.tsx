"use client";
import "client-only";

import Image from "next/image";

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
    <Container maxWidth={false}>
      {/* <Grid
        container
        flexBasis="max-content"
        spacing={1}
        flexGrow={1}
      > */}
      <AppBar
        id="appBar"
        position="fixed"
        sx={{
          width: "100%",
          boxShadow: 10,
          backgroundColor: "transparent",
        }}
      >
        <Toolbar
          variant="regular"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0,
            height: "100%",
            width: "100%",
            backgroundColor: "transparent",
            backdropFilter: "blur(1000px)",
            border: ".1rem solid",
            borderColor: "divider",
            boxShadow:
              "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
          }}
        >
          <Container maxWidth={false}>
            <Grid id="innerAppBarGridContainer" container>
              <Grid xs={1}>
                <Box position="relative">
                  <Image
                    src={"/gokart-R.png"}
                    alt="logo of anthony dombrowski"
                    fill
                  />
                </Box>
              </Grid>

              <Grid xs={2}>
                <MenuItem
                  onClick={() => scrollToSection("features")}
                  sx={{ py: "6px", px: "12px" }}
                >
                  <Typography variant="body1" color="text.primary">
                    Videos
                  </Typography>
                </MenuItem>
              </Grid>

              <Grid xs={2}>
                <MenuItem
                  onClick={() => scrollToSection("testimonials")}
                  sx={{ py: "6px", px: "12px" }}
                >
                  <Typography variant="body1" color="text.primary">
                    Blogs
                  </Typography>
                </MenuItem>
              </Grid>

              <Grid xs={2}>
                <MenuItem
                  onClick={() => scrollToSection("highlights")}
                  sx={{ py: "6px", px: "12px" }}
                >
                  <Typography variant="body1" color="text.primary">
                    Highlights
                  </Typography>
                </MenuItem>
              </Grid>

              <Grid xs={2}>
                <MenuItem
                  onClick={() => scrollToSection("pricing")}
                  sx={{ py: "6px", px: "12px" }}
                >
                  <Typography variant="body1" color="text.primary">
                    Pricing
                  </Typography>
                </MenuItem>
              </Grid>

              <Grid xs={1}>
                <MenuItem
                  onClick={() => scrollToSection("faq")}
                  sx={{ py: "6px", px: "12px" }}
                >
                  <Typography variant="body1" color="text.primary">
                    FAQ
                  </Typography>
                </MenuItem>
              </Grid>

              <Grid xs={1}>
                <Box
                  sx={{
                    display: { xs: "none", md: "flex" },
                    gap: 0.5,
                    alignItems: "center",
                  }}
                >
                  <Button
                    color="primary"
                    variant="text"
                    size="small"
                    component="a"
                    href="/material-ui/getting-started/templates/sign-in/"
                    target="_blank"
                  >
                    Sign in
                  </Button>
                  <Button
                    color="primary"
                    variant="contained"
                    size="small"
                    component="a"
                    href="/material-ui/getting-started/templates/sign-up/"
                    target="_blank"
                  >
                    Sign up
                  </Button>
                </Box>
              </Grid>

              <Grid xs={1}>
                <Box sx={{ display: { sm: "", md: "none" } }}>
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
                        minWidth: "60dvw",
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
                      <MenuItem>
                        <Button
                          color="primary"
                          variant="contained"
                          component="a"
                          href="/material-ui/getting-started/templates/sign-up/"
                          target="_blank"
                          sx={{ width: "100%" }}
                        >
                          Sign up
                        </Button>
                      </MenuItem>
                      <MenuItem>
                        <Button
                          color="primary"
                          variant="outlined"
                          component="a"
                          href="/material-ui/getting-started/templates/sign-in/"
                          target="_blank"
                          sx={{ width: "100%" }}
                        >
                          Sign in
                        </Button>
                      </MenuItem>
                    </Box>
                  </Drawer>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>

      <Toolbar />
      {/* </Grid> */}
    </Container>
  );
}

export default AppAppBar;
