import { GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { DataGrid } from "@mui/x-data-grid/DataGrid";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import { useEffect, useState } from "react";
import Box from "@mui/material/Box";

export default async function PlayerRating() {
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
    },
    {
      field: "name",
      type: "string",
      headerName: "Name",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "role",
      type: "custom",
      headerName: "Role",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "xp",
      type: "number",
      headerName: "Experience (yrs)",
      headerAlign: "center",
      align: "right",
    },
    {
      field: "car",
      type: "string",
      headerName: "Career",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "ovr",
      type: "number",
      headerName: "Overall Rating",
      headerAlign: "center",
      align: "right",
    },
    {
      field: "int",
      type: "number",
      headerName: "Intelligence",
      headerAlign: "center",
      align: "right",
    },
    {
      field: "spd",
      type: "number",
      headerName: "Speed",
      headerAlign: "center",
    },
    {
      field: "agi",
      type: "number",
      headerName: "Agility",
      headerAlign: "center",
    },
    {
      field: "tech",
      type: "string",
      headerName: "Technical Ability",
      headerAlign: "center",
    },
    {
      field: "eng",
      type: "number",
      headerName: "Engineering",
      headerAlign: "center",
    },
    {
      field: "team",
      type: "number",
      headerName: "Teamwork",
      headerAlign: "center",
    },
    {
      field: "lead",
      type: "number",
      headerName: "Leadership",
      headerAlign: "center",
    },
  ];

  const rows: GridRowsProp = [
    {
      id: 15,
      name: "Anthony Dombrowski",
      role: ["Product Manager", "Developer Advocate", "Developer Relations"],
      xp: 9,
      car: ["Ping Identity", "SpruceID", "Frontegg"],
      ovr: "A+",
      int: "A",
      spd: 73,
      agi: 91,
      tech: "A",
      team: 95,
      lead: 99,
      eng: 90,
    },
  ];

  return (
    <Grid
      id="playerRatingsPage-mainGridCont"
      container
      pt={3}
      pb={1}
    >
      <Grid
        id="playerRatingsPage-tableGrid"
        container
        justifyContent="center"
        size={12}
      >
        {/* <Container
          id="playerRatingsPage-tableContainer"
          maxWidth={false}
          sx={{ height: "100%", py: 1 }}
        > */}
        <DataGrid
          rows={rows}
          columns={columns}
          autoPageSize
          autosizeOnMount
          columnHeaderHeight={30}
          // sx={{ justifyContent: "center" }}
        />
        {/* </Container> */}
      </Grid>
    </Grid>
  );
}
