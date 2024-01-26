import { Grid, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

// import Wave from "../FooterWave/Wave";
import Tower from "../Tower/Tower";
import barcampLogo from "../../image/DragonBARCAMPblack8sxl-removebg-preview_w_bg.png";
import pupaLogo_blue from "../../image/pupa_logo_blue_with_bg.png";
import "./Sun.css";

function Footer() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xl"));

  return (
    <Grid
      container
      rowGap={3}
      columns={12}
      className="canvas"
      sx={{
        position: "relative",
        backgroundColor: "white",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        mt: "auto",
        width: "100%",
        // display: 'flex',
        // flexDirection: 'column',
        // marginY: 'auto',
        alignItems: "center",
        justifyContent: "center",
        
        overflow: "hidden",
      }}
    >
      <div class="cloud"></div>
      <div class="cloud a"></div>
      <div class="cloud b"></div>
      <div class="cloud c"></div>
      <div class="land">
        {/* <div class="tree"></div>
        <div class="tree a"></div>
        <div class="tree b"></div>
        <div class="tree c"></div>
        <div class="tree d"></div> */}
      </div>
      <div class="star"></div>
      <div class="star a"></div>
      <div class="star b"></div>
      <div class="star c"></div>
      <div class="star d"></div>
      <div class="wind"></div>
      <div class="eclipse">
        <div class="sun"></div>
        <div class="sun a"></div>
        <div class="moon"></div>
        <div class="moon a"></div>
      </div>
      <Grid
        item
        xl={4}
        xs={6}
        sx={{
          textAlign: "center",
          zIndex: "10",
        }}
      >
        <img
          width={matches ? "80" : "120"}
          src={pupaLogo_blue}
          alt="BarcampLogo"
        />
      </Grid>
      <Grid item xl={4} xs={6} sx={{ textAlign: "center", zIndex: "10" }}>
        <img
          width={matches ? "80" : "120"}
          src={barcampLogo}
          alt="BarcampLogo"
        />
      </Grid>
      {/* <Grid item xl={4} xs={12} sx={{ textAlign : 'center' }}>
                <Typography variant='subtitle1' fontWeight='bold'>Created by PUPA</Typography>
            </Grid> */}
      {/* <Wave /> */}
      {/* <Tower /> */}
      {/* <div className='sun'  /> */}
    </Grid>
  );
}

export default Footer;
