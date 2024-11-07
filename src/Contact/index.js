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
        padding: { xs: 2, sm: 4, md: 6 }, // Padding for responsiveness
        minHeight: { xs: "auto", sm: "50vh", md: "60vh" }, // Height adjustment based on screen size
      }}
    >
      <Container>
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {/* Left Column */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h4"
              sx={{
                ...styles.mainHeading,
                textAlign: { xs: "center", sm: "left" },
                fontSize: { xs: "36px", sm: "48px", md: "64px" }, // Adjust font size on smaller screens
              }}
            >
              Let’s talk
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mt: 2,
                mb: 4,
                textAlign: { xs: "center", sm: "left" },
                ...styles.text,
                fontSize: { xs: "14px", sm: "16px", md: "18px" }, // Adjust text size
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Typography>

            <Box sx={{ borderBottom: "1px solid #fff", mb: 4 }} />

            {/* Contact Info */}
            {[{
              icon: <HiOutlineMail size={35} color={Color.blue} />,
              label: "Our email",
              text: "hello@example.com",
            }, {
              icon: <LuPhone size={35} color={Color.blue} />,
              label: "Call us",
              text: "+001 92345678",
            }, {
              icon: <IoLocationOutline size={35}  color={Color.blue} />,
              label: "Find us",
              text: "2625 Durant Ave, Berkeley, CA 94720, United States",
            }].map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 3,
                  flexDirection: { xs: "column", sm: "row" },
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "white",
                    height: 60,
                    width: 60,
                    borderRadius: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: { xs: 2, sm: 0 },
                    marginRight: { sm: 3 },
                  }}
                >
                  {item.icon}
                </Box>
                <Box>
                  <Typography variant="subtitle1" style={styles.secHeading}>
                    {item.label}
                  </Typography>
                  <Typography style={styles.text}>{item.text}</Typography>
                </Box>
              </Box>
            ))}

            <Box sx={{ borderBottom: "1px solid #fff", mt: 4 }} />
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} sm={6} md={7}>
            <Box
              sx={{
                height: { xs: "200px", sm: "300px", md: "400px" }, // Adjust map height for different screen sizes
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
                textAlign: { xs: "center", sm: "left" },
                fontSize: { xs: "14px", sm: "16px", md: "18px" },
              }}
            >
              Join us on our journey to unlock the potential of next-generation
              treatments in skin health. Feel free to send your resume and cover
              letter to:
            </Typography>

            {/* Job Contact Info */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mt: 6,
                flexDirection: { xs: "column", sm: "row" },
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              <Box
                sx={{
                  backgroundColor: "white",
                  height: 60,
                  width: 60,
                  borderRadius: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: { sm: 3 },
                  marginBottom: { xs: 2, sm: 0 },
                }}
              >
                <HiOutlineMail size={35} color={Color.blue} />
              </Box>
              <Box>
                <Typography variant="subtitle1" style={styles.secHeading}>
                  For Job
                </Typography>
                <Typography style={styles.text}>jobs@resvitabio.com</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
