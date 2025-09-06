import { GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { DataGrid } from "@mui/x-data-grid/DataGrid";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import type { VideoURL } from "@/vids/VideoURLs";

export interface VidRowsProp extends GridRowsProp {
  video: VideoURL;
}

export default function VidLayoutTemplate(props: {rows: VidRowsProp, cols: GridColDef[]}) {
  const { rows, cols } = props;
  // const rows: GridRowsProp = [
  //   { id: 1, name: "Data Grid", description: "the Community version" },
  //   { id: 2, name: "Data Grid Pro", description: "the Pro version" },
  //   { id: 3, name: "Data Grid Premium", description: "the Premium version" },
  //   { id: 4, name: "Grid Premium", description: "the Premium version" },
  // ];
  // const columns: GridColDef[] = [
  //   { field: "name", headerName: "Product Name", width: 200, headerAlign: "center" },
  //   { field: "description", headerName: "Description", width: 300, headerAlign: "center" },
  // ];
  return (
    <Grid container>
      <Grid size={12}>
        <Container
          maxWidth={false}
          sx={{ maxHeight: "100vh", flexDirection: "column", py: 1 }}
        >
          <DataGrid
            rows={rows}
            columns={cols}
            autosizeOnMount
            sx={{ justifyContent: "center" }}
          />
        </Container>
      </Grid>
    </Grid>
  );
}
