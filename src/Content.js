import React from "react";
import {
  Box,
  Card,
  Grid,
  CardContent,
  Paper,
  styled,
  TextField,
  Button,
} from "@mui/material";

import "./App.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "theme.palette.text.secondary",
}));

export function Content() {
  return (
    <Grid
      container
      sx={{
        height: 1000,
        mt: 2,
        mr: 0,
        mb: 2,
        ml: 0,
        bgcolor: "green",
        display: "inline-flex",
        flexDirection: "row",
        alignContent: "flex-start",
      }}
    >
      <Grid xs={12} sx={{ mb: 1, ml: 3, mr: 3 }}>
        <Card
          sx={{
            height: "50px",
            bgcolor: "pink",
            boxShadow: "none",
            width: "100%",
          }}
        >
          <Grid
            item
            xs={2}
            sx={{
              display: "inline-flex",
              border: 1,
              p: 0.5,
              borderRadius: 2,
              borderColor: "#FFC20E",
              m: 1,
              boxShadow: 5,
              bgcolor: "#FFC20E",
              color: "#001864",
              mb: 10,
            }}
          >
            Quote 1
          </Grid>

          <Grid
            item
            xs={2}
            sx={{
              display: "inline-flex",
              border: 1,
              p: 0.5,
              borderRadius: 2,
              borderColor: "#FFC20E",
              m: 1,
              boxShadow: 5,
              bgcolor: "#FFFFFF",
              color: "#001864",
            }}
          >
            Quote 2
          </Grid>
          <Grid
            item
            xs={2}
            sx={{
              display: "inline-flex",
              border: 1,
              p: 0.5,
              borderRadius: 2,
              borderColor: "#FFC20E",
              m: 1,
              boxShadow: 5,
              bgcolor: "#FFFFFF",
              color: "#001864",
            }}
          >
            Quote 3
          </Grid>

          <Grid
            item
            xs={2}
            sx={{
              display: "inline-flex",
              border: 1,
              p: 0.5,
              borderRadius: 2,
              borderColor: "#FFC20E",
              m: 1,
              boxShadow: 5,
              bgcolor: "#FFC20E",
              color: "#001864",
              mb: 10,
            }}
          >
            Quote 1
          </Grid>

          <Grid
            item
            xs={12}
            sx={{
              bgcolor: "transparent",
              display: "inline-flex",
              justifyContent: "flex-end",
              alignItems: "right",
            }}
          > 
            <TextField
              id="outlined-search"
              label="Search quotes"
              type="search"
              size="small"
              sx={{
                width: "40vh",
                height: 36,
                p: "4px",
                ml: 41,
                alignContent: "right",
                alignItems: "right",
              }}
            
            />
            
          </Grid>
        </Card>
      </Grid>

      <Card
        sx={{
          mr: 3,
          ml: 3,
          bgcolor: "yellow",
          flexGrow: 6,
        }}
      >
        <Grid
          item
          xs={2}
          sx={{
            display: "inline-flex",
            p: 0.5,
            m: 1,
            color: "#001864",
            fontWeight: 700,
          }}
        >
          Quote #0001
        </Grid>

        <Grid
          item
          xs={6}
          sx={{
            bgcolor: "transparent",
            display: "inline-flex",
            justifyContent: "flex-end",
          }}
        >
          <TextField
            id="outlined-search"
            label="Quote's title"
            type="search"
            size="small"
            sx={{
              width: "40vh",
              height: 36,
              p: "4px",
              m: 0,
              alignContent: "right",
              alignItems: "right",
            }}
          />
        </Grid>
        <Grid
          item
          xs={2}
          sx={{
            display: "inline-flex",
            p: 0.5,
            m: 1,
            color: "#001864",
          }}
        >
          Jonathan Matthews
        </Grid>

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
      <Card
        sx={{
          mr: 3,
          ml: 3,
          flexGrow: 6,
          bgcolor: "purple",
        }}
      ></Card>
    </Grid>
  );
}

export default Content;
