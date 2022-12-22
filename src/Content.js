import React from "react";
import {
  Box,
  Button,
  Card,
  Grid,
  CardContent,
  Divider,
  Paper,
  styled,
  TextField,
} from "@mui/material";

import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";

import "./Content.css";

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
        bgcolor: "#F1EFF2",
        display: "inline-flex",
        flexDirection: "row",
        alignContent: "flex-start",
      }}
    >
      <Grid xs={12} sx={{ mb: 1, ml: 3, mr: 3 }}>
        <Card
          sx={{
            height: "50px",
            bgcolor: "transparent",
            boxShadow: "none",
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
            xs={12}
            sx={{
              bgcolor: "transparent",
              display: "inline-flex",
              justifyContent: "flex-end",
            }}
          >
            <TextField
              id="outlined-search"
              label="Search quotes"
              type="search"
              size="small"
              sx={{
                width: "40vh",
                height: 46,
                p: "4px",
                ml: 46,

                alignContent: "right",
              }}
            />
          </Grid>

          <Button
            variant="contained"
            sx={{
              display: "inline-flex",
              justifyContent: "flex-end",
              border: 1,
              p: 0.5,
              borderRadius: 2,
              borderColor: "#FFC20E",
              m: 1,
              boxShadow: 5,
              bgcolor: "#FFC20E",
              color: "#001864",
              textTransform: "capitalize",
              ml: 42,
              "&:hover": {
                backgroundColor: "#e4c77e",
                borderColor: "#001864",
              },
            }}
          >
            New quote
          </Button>
        </Card>
      </Grid>

      <Card
        sx={{
          ml: 3,
          bgcolor: "#fff",
          flexGrow: 2,
          border: 1,
          borderColor: "#FFC20E",
        }}
      >
        <Grid
          container
          sx={{
            color: "#001864",
            p: 1,
            display: "inline-flex",
            justifyContent: "space-around",
          }}
        >
          <Grid
            item
            xs={2}
            sx={{
              p: 0.5,
              m: 1,
              mr: 3,
              color: "#001864",
              fontSize: 20,
              fontWeight: 700,
            }}
          >
            Quote #0001
          </Grid>

          <Grid
            item
            xs={4}
            sx={{
              bgcolor: "transparent",
              display: "inline-flex",
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
                p: "2px",
                m: 0,
                alignContent: "center",
              }}
            />
          </Grid>

          <Grid item xs={3} sx={{ p: 0.5, color: "#001864", fontWeight: 700 }}>
            Jonathan Matthews
          </Grid>

          <Grid
            item
            xs={9}
            sx={{
              display: "inline-flex",
              justifyContent: "flex-end",
              color: "#001864",
              fontWeight: 600,
              fontStyle: "italic",
              ml: 3,
              mt: -1,
            }}
          >
            (issue date) 14/12/2022
          </Grid>
        </Grid>

        <Card sx={{ mt: 2, mb: 10, boxShadow: "none" }}>
          <Grid
            container
            sx={{
              color: "#001864",
              fontWeight: 600,
              display: "inline-flex",
              justifyContent: "space-around",
              fontSize: 18,
              mt: 2,
            }}
          >
            <Grid item xs={1} sx={{}}>
              <AddCircleRoundedIcon
                sx={{
                  bgcolor: "#001864",
                  borderRadius: 100,
                  color: "#FFC20E",
                }}
              />
            </Grid>

            <Grid item xs={1} sx={{ flexGrow: 2, alignSelf: "flex-start" }}>
              Services
            </Grid>

            <Grid item xs={1} sx={{}}>
              Supplier
            </Grid>

            <Grid item xs={1} sx={{}}>
              Code
            </Grid>

            <Grid item xs={1} sx={{}}>
              Qty
            </Grid>

            <Grid item xs={1} sx={{}}>
              Cost
            </Grid>

            <Grid item xs={1} sx={{}}>
              Sell
            </Grid>
          </Grid>{" "}
          <Divider
            sx={{
              color: "yellowgreen",
              bgcolor: "#FFC20E",
              width: "92%",
              ml: 3,
            }}
          />
        </Card>
      </Card>

      <Card
        sx={{
          mr: 3,
          ml: 3,
          flexGrow: 9,
          bgcolor: "#fff",
          border: 1,
          borderColor: "#FFC20E",
        }}
      >
        <Grid
          item
          xs={8}
          sx={{
            bgcolor: "transparent",
            display: "inline-flex",
            justifyContent: "flex-end",
            m: 1,
          }}
        >
          <TextField
            id="outlined-search"
            label="Search items"
            type="search"
            size="small"
            sx={{ height: 46, p: "2px", m: 1 }}
          />
          <Grid
            item
            xs={7}
            sx={{
              bgcolor: "transparent",
              display: "inline-flex",
              justifyContent: "flex-end",
              mt: 2.5,
              ml: 5,
              mr: 0,
              color: "#001864",
            }}
          >
            <AddCircleRoundedIcon
              sx={{
                mr: 1,
                mt: -0.5,
                bgcolor: "#001864",
                borderRadius: 100,
                color: "#FFC20E",
              }}
            />
            Add item
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}

export default Content;
