import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Unstable_Grid2";
import LoginBtn from "@/components/auth/LoginBtn";
import LogoutBtn from "@/components/auth/LogoutBtn";
import UserAvatar from "@/components/auth/UserAvatar";

import Link from "next/link";

import type { Session } from "next-auth";

import EventTypes from "@/components/calendly/EventTypes";

export default async function CalendlyPage({ session }: { session: Session }) {
  return (
    <Container maxWidth={false}>
      <Grid
        id="calendly-GridContainer"
        container
        spacing={6}
        display="flex"
        justifyContent="center"
        alignItems="center"
        paddingX={0}
      >
        <Grid
          xs="auto"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <UserAvatar src={session.calendlyAccount?.avatar_url} />
        </Grid>
        <Grid
          xs={session ? "auto" : 12}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography>Hi, {session.calendlyAccount?.name}</Typography>
        </Grid>
        <Grid
          xs="auto"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <LogoutBtn provider="Calendly"></LogoutBtn>
        </Grid>

        {session.calendlyAccount?.scheduling_url && (
          <Grid
            xs={12}
            container
            spacing={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Grid
              xs={12}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography
                variant="body1"
                lineHeight={1.15}
                overflow="hidden"
                component="pre"
                fontSize="1.5rem"
                color="primary.light"
              >
                Schedule some time with me via my Calendly Link:
              </Typography>
            </Grid>
            <Grid
              xs={12}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Button
                variant="text"
                component={Link}
                href={session.calendlyAccount.scheduling_url}
              >
                <Typography
                  variant="body1"
                  lineHeight={1.15}
                  overflow="hidden"
                  component="pre"
                  fontSize="1.1rem"
                  color="secondary.light"
                  textTransform="lowercase"
                  sx={{ textDecoration: "solid underline cyan 1px" }}
                >
                  {session.calendlyAccount.scheduling_url}
                </Typography>
              </Button>
            </Grid>
          </Grid>
        )}
        <Grid
          id="eventTypes"
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <EventTypes session={session} />
        </Grid>
        <Grid
          id="session"
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
          overflow="auto"
        >
          <Box maxHeight="30vh">
            <Typography
              whiteSpace="pre-wrap"
              fontWeight={100}
              color="white"
              fontSize=".7rem"
              lineHeight={1.2}
            >
              {JSON.stringify(session, null, 4)}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
