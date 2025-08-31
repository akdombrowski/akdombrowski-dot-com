"use client";

import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import { useState, type MouseEvent } from "react";

import type { Session } from "next-auth";
import type { CalendlyEventType } from "@/actions/calendly/eventTypes";
export default function EventTypes({
  events,
}: {
  events: { [key: string]: CalendlyEventType };
}) {
  return (
    <Container maxWidth={false}>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          size={{xs: 12}}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography sx={{ my: "auto" }}>Your Active Event Types</Typography>
        </Grid>
        {events && (
          <Grid
            size={{xs: 12}}
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
