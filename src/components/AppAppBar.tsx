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

import { alpha } from "@mui/material/styles";
import { LinkedIn, GitHub } from "@/social";

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
          backgroundColor: alpha("#fff", 0.01),
        }}
      >
        <Container maxWidth={false}>
          <Toolbar
            variant="dense"
            disableGutters
            sx={{
              display: "flex",
              minHeight: "10vh",
              maxHeight: "10vh",
              alignItems: "stretch",
              backgroundColor: alpha("#fff", 0.01),
              backdropFilter: "blur(1000px)",
              border: ".1rem solid",
              borderColor: "divider",
              boxShadow:
                "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
            }}
          >
            <Grid
              id="innerAppBarGridContainer"
              container
              justifyContent="space-between"
              alignItems="stretch"
              columnSpacing={3}
              width="100%"
            >
              <Grid
                xs={6}
                height="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Grid
                  container
                  columns={12}
                  width="100%"
                  height="100%"
                  justifyContent="space-between"
                  alignItems="stretch"
                >
                  <Grid
                    xs={3}
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
                    xs={9}
                    height="100%"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Grid
                      container
                      columns={12}
                      width="100%"
                      height="100%"
                      justifyContent="left"
                      alignItems="stretch"
                      columnSpacing={3}
                    >
                      <Grid
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
              </Grid>

              <Grid
                xs={4}
                height="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Typography variant="overline" fontWeight={900} color="text.primary">
                  Anthony Dombrowski's Site
                </Typography>
              </Grid>

              <Grid
                xs={2}
                height="100%"
                display="flex"
                justifyContent="right"
                alignItems="center"
              >
                <Box width="40%">
                  <LinkedIn btnSize={{ height: "100%", width: "100%" }} />
                </Box>
                <Box width="40%">
                  <GitHub btnSize={{ height: "100%", width: "100%" }} />
                </Box>
              </Grid>

              <Grid xs={1} display={{ sm: "", md: "none" }}>
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
