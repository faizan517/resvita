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
      sx={{ display: "flex", alignItems: "center", minHeight: "100vh" }}
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
          }}
        >
          <Box
            component="img"
            src={require("../../assets/girl.png")}
            alt="Video call"
            sx={{ maxWidth: "100%", height: "auto",zIndex:100 }}
          />
            <img
            component="img"
            src={require("../../assets/logobg.png")}
            alt="Video call"
            sx={{ maxWidth: "100%", height: "auto" }}
          />
          
          
        </Grid>

        {/* Right side with news section */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4, bgcolor: "#005792", color: "#fff" }}>
            <Typography variant="h4" gutterBottom>
              NEWS
            </Typography>
            <Typography variant="body1" paragraph>
              Combine the convenience of technology with the personal touch of
              face-to-face healthcare.
            </Typography>
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <IconButton color="inherit">
                  <PlayCircleOutlineIcon />
                </IconButton>
                <Typography variant="body1">
                  Individual and company healthcare data are measured and
                  maintained across time to plan timely interventions.
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <IconButton color="inherit">
                  <PlayCircleOutlineIcon />
                </IconButton>
                <Typography variant="body1">
                  Both healthcare, e-cards, and insurance services are available
                  at fingertips via an app, WhatsApp, and other digital
                  channels.
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <IconButton color="inherit">
                  <PlayCircleOutlineIcon />
                </IconButton>
                <Typography variant="body1">
                  24X7, free Medical Advisors accessible for all health and
                  insurance needs to deliver 'empathy at scale'.
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
export default HealthcareNews;
