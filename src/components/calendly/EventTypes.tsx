"use client";

import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";

import { getActiveEventTypes } from "@/actions/calendly/eventTypes";

import { useState } from "react";

import type { Session } from "next-auth";
import type { CalendlyEventType } from "@/actions/calendly/eventTypes";

export default function EventTypes({ session }: { session: Session }) {
  const [events, setEvents] = useState<CalendlyEventType[] | null>(null);

  const handleClick = async () => {
    const activeEventTypes = (await getActiveEventTypes(
      session,
    )) as CalendlyEventType[];
    console.log(activeEventTypes);
    setEvents(activeEventTypes);
  };

  return (
    <Container maxWidth={false}>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Button
            variant="contained"
            sx={{ p: 2 }}
            onClick={handleClick}
          >
            <Typography sx={{ my: "auto" }}>
              Get Your Active Event Types
            </Typography>
          </Button>
        </Grid>
        {events && (
          <Grid
            xs={12}
            display="flex"
            justifyContent="center"
            alignItems="center"
            overflow="auto"
            width="100%"
          >
            <Box maxHeight="30vh">
              <Typography
                whiteSpace="pre-wrap"
                fontWeight={100}
                color="white"
                fontSize=".7rem"
                lineHeight={1.2}
              >
                {JSON.stringify(events, null, 4)}
              </Typography>
            </Box>
          </Grid>
        )}
      </Grid>
    </Container>
  );
}
