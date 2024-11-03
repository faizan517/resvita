import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import person1 from "../../assets/p1.png";
import person2 from "../../assets/p2.png";
import "./style.css";

export default function Main() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1440px",
        height: { xs: "auto", md: "942px" },
        position: "relative",
        overflow: "hidden",
        margin: "0 auto",
        backgroundColor: "black",
        padding: { xs: "20px", md: "0" },
      }}
    >
      {/* Team Intro Text */}
      <Box
        sx={{
          width: { xs: "100%", md: "683px" },
          height: { xs: "auto", md: "167px" },
          flexDirection: "column",
          gap: "22px",
          position: "absolute",
          top: { xs: "20px", md: "176px" },
          left: { xs: "20px", md: "126px" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "32px", md: "48px" },
            fontWeight: 700,
            lineHeight: { xs: "40px", md: "58px" },
            color: "#ffffff",
            whiteSpace: "nowrap",
          }}
        >
          Meet Our Team
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "16px", md: "24px" },
            fontWeight: 400,
            lineHeight: { xs: "24px", md: "29px" },
            color: "#ffffff",
            maxWidth: { xs: "100%", md: "600px" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          We love what we do and we do it with passion. We value the
          experimentation of the message and smart incentives.
        </Typography>
      </Box>

      {/* Team Photos Section */}
      <Box
        sx={{
          display: "flex",
          width: { xs: "100%", md: "1190px" },
          flexDirection: "column",
          gap: { xs: "20px", md: "64px" },
          position: { xs: "static", md: "absolute" },
          top: { md: "176px" },
          left: { md: "126px" },
          alignItems: { xs: "center", md: "flex-start" },
          marginTop: { xs: "40px", md: "0" },
        }}
      >
        {/* First Row with Photos */}
        <Box
          sx={{
            display: "flex",
            width: { xs: "100%", md: "532px" },
            gap: "14px",
            alignItems: "center",
            justifyContent: { xs: "center", md: "flex-end" },
            alignSelf: "flex-end",
            backgroundColor:'pink'
          }}
        >
          {/* Team Member 1 with Overlay */}
          <Box
            className="container"
            sx={{ position: "relative", }}
          >
            <Box
              sx={{
                width: { xs: "200px", md: "249px" },
                height: { xs: "220px", md: "280px" },
                backgroundImage: `url(${person2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <Box className="overlay">
              <Typography className="text">Hello World</Typography>
            </Box>
          </Box>

          {/* Team Member 2 */}
          <Box
            sx={{
              width: { xs: "200px", md: "249px" },
              height: { xs: "220px", md: "280px" },
              backgroundImage: `url(${person1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </Box>

        {/* Second Row with Masked Photos */}
        <Box
          sx={{
            display: "flex",
            flexWrap: { xs: "wrap", md: "nowrap" },
            gap: { xs: "10px", md: "64px" },
            alignItems: "center",
            width: "100%",
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          {[...Array(4)].map((_, index) => (
            <Box
              key={index}
              sx={{
                width: { xs: "150px", md: "249px" },
                height: { xs: "180px", md: "280px" },
                backgroundColor: "#ffffff",
                WebkitMaskImage: `url(${person1})`,
                WebkitMaskSize: "cover",
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
