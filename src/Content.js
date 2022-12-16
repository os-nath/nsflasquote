import React from "react";
import { Card, Grid, CardContent, Paper, styled } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "theme.palette.text.secondary",
}));

export function Content() {
  return (
    <Card
      className="mainAppCard"
      sx={{
       
        height: 1000,
        display: "inline-flex",
        m: 2,
        bgcolor: "#f2f2f9",
      }}
    >
      <CardContent sx={{ m: 0, display: "inline-flex" }}>
        <Grid container sx={{ color: "#fff", bgcolor: "#001864" }}>
          <Grid item xs={4} sx={{ display: "flex-start" }}>
            <Item
              sx={{
                textAlign: "left",
                ml: 4,
                mt: 1,
                bgcolor: "transparent",
                boxShadow: "none",
              }}
            >
              <img
                src="FlashquoteLogo.png"
                alt="appLogo"
                height="70vh"
                marginTop="10"
              ></img>
            </Item>
            Oiiee
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Content;
