import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import GoogleMapReact from "google-map-react";
import { Fonts } from "../utils/Fonts";
import Color from "../utils/Color";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { LuPhone } from "react-icons/lu";

const styles = {
  mainHeading: {
    ...Fonts.Inter,
    fontSize: "64px",
    fontWeight: 600,
    textAlign: "left",
  },
  secHeading: {
    ...Fonts.Inter,
    fontSize: "20px",
    fontWeight: 600,
    textAlign: "left",
  },
  text: {
    ...Fonts.Inter,
    fontSize: "16px",
    fontWeight: 400,
    textAlign: "left",
    color: Color.fontGray,
  },
};

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Contact = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <Box
      sx={{
        
        backgroundColor: "black",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: { xs: 2, md: 4 },
        height: "50vw",
      }}
    >
      <Box>
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {/* Left Column */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h4"
              sx={{
                ...styles.mainHeading,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Let’s talk
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mt: 2,
                mb: 4,
                textAlign: { xs: "center", md: "left" },
                ...styles.text,
                fontSize: 18,
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Typography>

            <Box sx={{ borderBottom: "1px solid #fff", mb: 4 }} />

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 3,
                flexDirection: { xs: "column", md: "row" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <div
                style={{
                  backgroundColor: "white",
                  height: 60,
                  width: 60,
                  borderRadius: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 30,
                }}
              >
                {/* <div> */}
                <HiOutlineMail
                  size={35}
                  color={Color.blue}
                  // style={{backgroundColor:'red',height:60,width:70,borderRadius:100}}
                  sx={{ mr: { md: 2 }, backgroundColor: "red" }}
                />
              </div>
              <Box>
                <Typography variant="subtitle1" style={styles.secHeading}>
                  Our email
                </Typography>
                <Typography style={styles.text}>hello@example.com</Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 3,
                flexDirection: { xs: "column", md: "row" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <div
                style={{
                  backgroundColor: "white",
                  height: 60,
                  width: 60,
                  borderRadius: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 30,
                }}
              >
                {/* <div> */}
                <LuPhone
                  size={35}
                  color={Color.blue}
                  // style={{backgroundColor:'red',height:60,width:70,borderRadius:100}}
                  sx={{ mr: { md: 2 }, backgroundColor: "red" }}
                />
              </div>
              <Box>
                <Typography variant="subtitle1" style={styles.secHeading}>
                  Call us
                </Typography>
                <Typography style={styles.text}>+001 92345678</Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: { xs: "column", md: "row" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <div
                style={{
                  backgroundColor: "white",
                  height: 60,
                  width: 80,
                  borderRadius: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 30,
                }}
              >
                <IoLocationOutline
                  size={35}
                  color={Color.blue}
                  // style={{backgroundColor:'red',height:60,width:70,borderRadius:100}}
                  sx={{ mr: { md: 2 }, backgroundColor: "red" }}
                />
              </div>
              <Box>
                <Typography variant="subtitle1" style={styles.secHeading}>
                  Find us
                </Typography>
                <Typography style={styles.text}>
                  2625 Durant Ave, Berkeley, CA 94720, United States
                </Typography>
              </Box>
            </Box>

            <Box sx={{ borderBottom: "1px solid #fff", mt: 4 }} />
          </Grid>
          <div style={{ margin: 20 }} />
          {/* Right Column */}
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                height: { xs: "200px", md: "300px" },
                width: "100%",
                mb: 4,
              }}
            >
              <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
              >
                <AnyReactComponent
                  lat={10.99835602}
                  lng={77.01502627}
                  text="My Marker"
                />
              </GoogleMapReact>
            </Box>

            <Typography
              variant="body1"
              sx={{
                mt: 2,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Join us on our journey to unlock the potential of next-generation
              treatments in skin health. Feel free to send your resume and cover
              letter to:
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mt: 6,
                flexDirection: { xs: "column", md: "row" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <div
                style={{
                  backgroundColor: "white",
                  height: 60,
                  width: 60,
                  borderRadius: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 30,
                }}
              >
                <HiOutlineMail
                  size={35}
                  color={Color.blue}
                  // style={{backgroundColor:'red',height:60,width:70,borderRadius:100}}
                  sx={{ mr: { md: 2 }, backgroundColor: "red" }}
                />
              </div>
              <Box>
                <Typography variant="subtitle1" style={styles.secHeading}>
                  For Job
                </Typography>
                <Typography style={styles.text}>jobs@resvitabio.com</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Contact;
