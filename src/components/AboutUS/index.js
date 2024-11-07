import React from "react";
import skin from '../../assets/skin.gif';
import { Fonts } from "../../utils/Fonts";
import { Grid, Typography } from "@mui/material";
import Color from "../../utils/Color";

const AboutUs = () => {
  return (
    <div style={styles.container} id="aboutUs">
      <Typography variant="h2" style={styles.heading}>
        About Us
      </Typography>
      <div style={styles.divider}></div>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={6} md={5} style={styles.imageContainer}>
          <img
            src={skin}
            alt="Skin Layer Illustration"
            style={styles.image}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={5} style={styles.textContainer}>
          <Typography variant="h3" style={styles.subHeading}>
            Transforming Skin Disease Treatment with Synthetic Biology
          </Typography>
          <Typography variant="body1" style={styles.paragraph}>
            ResVita Bio is a synthetic biology startup focused on developing
            treatments for skin diseases. Our platform uses genetically
            engineered bacteria to deliver therapeutic proteins directly to
            affected areas, offering a continuous and sustained treatment
            approach. This innovative method addresses challenges like protein
            stability and short half-lives by creating a living system that
            continuously produces therapeutic agents. We aim to transform
            treatments for conditions such as Netherton Syndrome and Severe
            Atopic Dermatitis.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

const styles = {
  container: {
    padding: "50px",
    textAlign: "center",
    color: "#333",
  },
  heading: {
    fontSize: "48px",
    fontWeight: 700,
    ...Fonts.Inter,
    color: Color.black,
    marginTop:50,
  },
  divider: {
    width: "90vw",
    height: "1px",
    backgroundColor: "#66CCFF",
    margin: "10px auto 30px",
  },
  imageContainer: {
    // display: 'flex',
    // justifyContent: 'center',
    // backgroundColor:'red'
  },
  image: {
    width: "100%",
    maxWidth: "487px",
    height: "auto",
    objectFit: "cover",
  },
  textContainer: {
    maxWidth: "600px",
    textAlign: "left",
  },
  subHeading: {
    fontSize: "32px",
    fontWeight: 700,
    ...Fonts.Inter,
    backgroundImage: "linear-gradient(to right, #005F99 , #66CCFF)",
    backgroundClip: 'text',
    color: 'transparent',
  },
  paragraph: {
    fontSize: "20px",
    fontWeight: 400,
    ...Fonts.Inter,
    color: 'black',
    textAlign: 'justify',
    paddingTop:10
  },
};

export default AboutUs;