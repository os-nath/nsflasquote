import React from "react";
import { Card, Grid, CardContent } from "@mui/material";

export function Content() {
  return (
    <Card
      sx={{
        height: 1000,
        width: "100%",
        m: 2,
        bgcolor: "yellow",
      }}
    >
      <CardContent sx={{ m: 0 }}>
        <Grid container sx={{ color: "#fff", bgcolor: "#001864" }}>
          <Grid
            item
            xs={6}
            sx={{ display: "inline-flex", justifyContent: "flex-start" }}
          >
            Oiiee
          </Grid>

          <Grid container sx={{ color: "#fff", bgcolor: "#001864" }}>
            <Grid
              item
              xs={6}
              sx={{ display: "inline-flex", justifyContent: "flex-start" }}
            >
              Oiiee
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Content;
