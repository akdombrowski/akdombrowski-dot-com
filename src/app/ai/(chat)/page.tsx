import { GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { DataGrid } from "@mui/x-data-grid/DataGrid";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import { useEffect, useState } from "react";
import getModels from "@/actions/getModel";
import Box from "@mui/material/Box";

export default async function ChatPage() {
  // const [models, setModels] = useState(["pull a model"])
  // const rows: GridRowsProp = models.map((v, i, mods) => {
  /* [
    {
      id: 1,
      mname: "Gemma3",
      model: "the Community version",
      modified_at: "",
      size: 70171,
      digest: "",
      details: {},
    },
    {
      id: 2,
      mname: "gpt4",
      model: "the Community version",
      modified_at: "2025-02-20T13:59:48.84934343-06:00",
      size: 70171,
      digest: "085a1fdae525a3804ac95416b38498099c241defd0f1efc71dcca7f63190ba3d",
      details: {},
    },
    {
      id: 3,
      mname: "llama 3.3",
      model: "the Community version",
      modified_at: "2025-02-20T13:59:48.84934343-06:00",
      size: 70171,
      digest: "085a1fdae525a3804ac95416b38498099c241defd0f1efc71dcca7f63190ba3d",
      details: {},
    },
    {
      id: 4,
      mname: "deepseek",
      model: "the Community version",
      modified_at: "2025-02-20T13:59:48.84934343-06:00",
      size: 70171,
      digest: "085a1fdae525a3804ac95416b38498099c241defd0f1efc71dcca7f63190ba3d",
      details: {
        parent_model: "",
        format: "gguf",
        family: "gemma3",
        families: ["gemma3"],
        parameter_size: "4.3B",
        quantization_level: "Q4_K_M",
      },
    },
  ]; */
  const columns: GridColDef[] = [
    {
      field: "mname",
      type: "string",
      headerName: "Name",
      headerAlign: "center",
      flex: 1,

      align: "right",
    },
    {
      field: "model",
      type: "string",
      headerName: "Model",
      headerAlign: "center",
      flex: 2,
      align: "right",
    },
    {
      field: "modified_at",
      type: "dateTime",
      headerName: "Modified at",
      headerAlign: "center",
      flex: 2,
      align: "right",
    },
    {
      field: "size",
      type: "number",
      headerName: "Size",
      headerAlign: "center",
      flex: 1,
      align: "right",
    },
    { field: "digest", type: "string", headerName: "Digest", flex: 0.5, headerAlign: "center" },
    { field: "details", type: "string", headerName: "Details", flex: 5, headerAlign: "center" },
  ];

  const getAvailModels = async () => {
    const res = await fetch("/api/chat");

    if (!res.ok) {
      console.error("error fetching available models from ollama");
      return;
    }

    const resj = await res.json();

    return resj.models;
  };

  const { models } = await getModels();

  // const listModels = models.map((m, i) => {
  //   const { model, size, modified_at, digest, details } = m;
  //   const mname = m.name;
  //   return (
  //     <Box
  //       key={i}
  //       width="100%"
  //       height="100%"
  //     >
  //       <Grid
  //         container
  //         justifyContent="center"
  //       >
  //         <Grid
  //           container
  //           size={12}
  //           display="flex"
  //           spacing={3}
  //         >
  //           <Grid
  //             container
  //             size={6}
  //             display="flex"
  //             spacing={3}
  //           >
  //             <Grid>
  //               <Typography>mname</Typography>
  //             </Grid>
  //             <Grid>
  //               <Typography>{mname}</Typography>
  //             </Grid>
  //           </Grid>
  //           <Grid
  //             container
  //             size={6}
  //             display="flex"
  //             spacing={3}
  //           >
  //             <Grid>
  //               <Typography>model</Typography>
  //             </Grid>
  //             <Grid>
  //               <Typography>{model}</Typography>
  //             </Grid>
  //             <Grid size={4}></Grid>
  //           </Grid>
  //         </Grid>
  //       </Grid>
  //     </Box>
  //   );
  // });

  const rows: GridRowsProp = models.map((m, i) => {
    const { model, size, modified_at, digest, details } = m;
    const mname = m.name;
    return {
      id: i,
      name: mname,
      model,
      modified_at: new Date(modified_at),
      size,
      digest,
      details: JSON.stringify(details, null, 2),
    };
  });

  return (
    <Grid
      id="chatpage-mainGridCont"
      container
      justifyContent="center"
      alignItems="stretch"
    >
      <Grid
        id="chatpage-tableGrid"
        size={12}
      >
        <Container
          id="chatpage-tableContainer"
          maxWidth={false}
          sx={{ maxHeight: "100vh", flexDirection: "column", py: 1 }}
        >
          <DataGrid
            rows={rows}
            columns={columns}
            // autosizeOnMount
            // sx={{ justifyContent: "center" }}
          />
        </Container>
      </Grid>
    </Grid>
  );
}
