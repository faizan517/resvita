import React from "react";
import { Container } from "react-bootstrap";
import image from "../../assets/career.png";
import Color from "../../utils/Color";
import { Fonts } from "../../utils/Fonts";
import { Box } from "@mui/material";

const styles = {
  container: {
    height: "20vw",
    width: "100%",
    backgroundImage: `url(${image})`, // Corrected syntax
    backgroundSize: "cover", // Added to make the image cover the entire area
    backgroundPosition: "center", // Added to center the image
    backgroundRepeat: "no-repeat", // Prevents the image from repeating
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  heading: {
    ...Fonts.Inter,
    fontSize: "64px",
    fontWeight: 700,
    textAlign: "left",
    color: Color.white,
    paddingLeft:200
  },
};

function Career() { 
  return (
    <Box style={styles.container} >
      <text style={styles.heading}>Career</text>
    </Box>
  );
}

export default Career;
