import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Container,
  IconButton,
} from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

function HealthcareNews() {
  return (
    <Container
      maxWidth="lg"
      sx={{ display: "flex", alignItems: "center", minHeight: "100vh", py: 4 }}
    >
      <Grid container spacing={2}>
        {/* Left side with image */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <Box
            component="img"
            src={require("../../assets/girl.png")}
            alt="Girl"
            sx={{
              maxWidth: { xs: "80%", md: "100%" },
              height: "auto",
              zIndex: 100,
            }}
          />
          <Box
            component="img"
            src={require("../../assets/logobg.png")}
            alt="Background Logo"
            sx={{
              position: "absolute",
              maxWidth: "70%",
              opacity: 0.5,
              zIndex: 1,
            }}
          />
        </Grid>

        {/* Right side with news section */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              p: { xs: 2, md: 4 },
              bgcolor: "#005792",
              color: "#fff",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography variant="h4" gutterBottom sx={{ fontSize: { xs: "1.8rem", md: "2.125rem" } }}>
              NEWS
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}>
              Combine the convenience of technology with the personal touch of
              face-to-face healthcare.
            </Typography>
            <Box>
              {[
                "Individual and company healthcare data are measured and maintained across time to plan timely interventions.",
                "Both healthcare, e-cards, and insurance services are available at fingertips via an app, WhatsApp, and other digital channels.",
                "24X7, free Medical Advisors accessible for all health and insurance needs to deliver 'empathy at scale'."
              ].map((text, index) => (
                <Box key={index} sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <IconButton color="inherit" size="large" sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }}>
                    <PlayCircleOutlineIcon fontSize="inherit" />
                  </IconButton>
                  <Typography variant="body1" sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}>
                    {text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HealthcareNews;
