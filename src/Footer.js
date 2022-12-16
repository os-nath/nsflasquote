import React from "react";
import { Grid } from "@mui/material";
import "./css/Footer.css";

export function Footer() {
  return (
    <>
      <Grid
        container position="absolute"
        sx={{ color: "#fff", p: "2vh", bgcolor: "#001864" }}
      >
        <Grid item xs={6} sm={3} md={1.5} lg={1.5} xl={1.5}>
          <span className="label-card-text">Support </span>
        </Grid>
        <Grid item xs={6} sm={3} md={1.5} lg={1.5} xl={1.5}>
          <span className="label-card-text">Help</span>
        </Grid>
        <Grid item xs={6} sm={3} md={1.5} lg={1.5} xl={1.5}>
          <span className="label-card-text">Center</span>
        </Grid>
        <Grid item xs={6} sm={3} md={1.5} lg={1.5} xl={1.5}>
          <span className="label-card-text">Terms of Service</span>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          sx={{ textAlign: "right" }}
        >
          <span className="label-card-text">
            {"CloudHotel"} &copy; {new Date().getFullYear()} {"CorpCloud"}
          </span>
        </Grid>
      </Grid>
    </>
  );
}

export default Footer;
