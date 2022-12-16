import React from "react";
import { Avatar, Card, Grid, CardContent, TextField } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

import "./Header.css";

function Header() {
  return (
    <Card sx={{ borderRadius: 0 }}>
      <CardContent sx={{ bgcolor: "#001864", borderRadius: 0, p: 0.5 }}>
        <Grid container className="header" sx={{ ml: 2, mr: 2 }}>
          <Grid
            item
            xs={4}
            sx={{ display: "inline-flex", justifyContent: "flex-start", ml: 6 }}
          >
            <img
              src="FlashquoteLogo_reversed.png"
              alt="appLogo"
              height="70vh"
            ></img>
          </Grid>

          <Grid item xs={3}></Grid>

          <Grid
            item
            xs={4}
            sx={{
              display: "inline-flex",
              justifyContent: "flex-end",
              p: 0,
              m: 0,
            }}
          >
            <Avatar
              sx={{
                width: 34,
                height: 34,
                border: 2,
                mt: 3,
                borderColor: "#f9ce3d",

                "&:hover": {
                  borderColor: "#20C4F4",
                  backgroundColor: "none",
                },
              }}
              alt="User"
              src="userAvatar.png"
            />
            <span className="avatarUsername">Carol Stuart</span>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Header;

<SearchRoundedIcon sx={{ color: "#BF4BE3" }} />;

<TextField
  id="outlined-search"
  type="search"
  size="small"
  sx={{ width: "34vh", height: 36, p: 0, m: 0, bgcolor: "white" }}
/>;
