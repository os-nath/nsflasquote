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
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

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
                height: 36,
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

        <Card sx={{ mt: 2, mb: 2, boxShadow: "none" }}>
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
            <Grid item xs={1} sx={{ mr: -2, ml: 1 }}>
              <AddCircleRoundedIcon
                sx={{
                  bgcolor: "#001864",
                  borderRadius: 100,
                  color: "#FFC20E",
                }}
              />
            </Grid>

            <Grid
              item
              xs={1}
              sx={{ flexGrow: 2, alignSelf: "flex-start", ml: -6, mr: 18 }}
            >
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
          <Divider sx={{ bgcolor: "#FFC20E", width: "92%", ml: 3 }} />
        </Card>

        <Card sx={{ mt: 0, mb: 10, boxShadow: "none" }}>
          <Grid
            container
            sx={{
              color: "#001864",
              fontWeight: 600,
              display: "inline-flex",
              justifyContent: "space-around",
              fontSize: 16,
              mt: 0,
            }}
          >
            <Grid item xs={1} sx={{ ml: 2 }}>
              <DeleteOutlineRoundedIcon sx={{ color: "#AC0000" }} />

              <KeyboardArrowDownRoundedIcon />
            </Grid>

            <Grid
              item
              xs={3}
              sx={{ flexGrow: 2, alignSelf: "flex-start", ml: -7 }}
            >
              Mallina site Unified Comms
            </Grid>

            <Grid item xs={1} sx={{}}>
              AAPT
            </Grid>

            <Grid item xs={1} sx={{}}>
              0043569MA
            </Grid>

            <Grid item xs={1} sx={{}}>
              1
            </Grid>

            <Grid item xs={1} sx={{}}>
              $86
            </Grid>

            <Grid item xs={1} sx={{}}>
              $100
            </Grid>
          </Grid>{" "}
        </Card>
        <TextField
          id="outlined-basic"
          label="Notes"
          variant="outlined"
          multiline
          sx={{ m: 3 }}
        />
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
          container
          sx={{ display: "inline-flex", justifyContent: "space-around" }}
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
        </Grid>

        <Card sx={{ mt: 0, mb: 10, boxShadow: "none" }}>
          <Grid
            container
            sx={{
              color: "#001864",
              fontWeight: 600,
              display: "inline-flex",
              justifyContent: "space-around",
              fontSize: 16,
              mt: 0,
            }}
          >
            <Grid item xs={1} sx={{}}>
              Items
            </Grid>

            <Grid item xs={1} sx={{}}>
              Price
            </Grid>
            <Divider sx={{ bgcolor: "#FFC20E", width: "92%", ml: 3 }} />
          </Grid>
        </Card>
      </Card>
    </Grid>
  );
}

export default Content;
