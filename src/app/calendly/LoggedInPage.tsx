import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Unstable_Grid2";
import LogoutBtn from "@/components/auth/LogoutBtn";
import UserAvatar from "@/components/auth/UserAvatar";

import Link from "next/link";
import { redirect } from "next/navigation";

import { auth } from "@/auth";

import EventTypes from "@/components/calendly/EventTypes";

import getActiveEventTypes from "@/actions/calendly/eventTypes";
import { CalendlyEventType } from "../../actions/calendly/eventTypes";

export default async function LoggedInPage() {
  const session = await auth();

  if (session) {
    const eventTypes = await getActiveEventTypes(session);
    const calendlyAcctInfo = session.calendlyAccount;

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
            {eventTypes.error ? (
              <Typography variant="body1">
                No event types found. If you know you have some, try logging out
                then back in.
              </Typography>
            ) : (
              <EventTypes
                events={eventTypes as { [key: string]: CalendlyEventType }}
              />
            )}
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
                {JSON.stringify(calendlyAcctInfo, null, 4)}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    );
  }

  redirect("/");
}
