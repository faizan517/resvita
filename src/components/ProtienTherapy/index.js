import React from "react";
import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
import { GoShieldCheck } from "react-icons/go";
import { AiOutlineUpload } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { Fonts } from "../../utils/Fonts";

const styles = {
  card: {},
  heading: {
    ...Fonts.Inter,
    fontSize: 16,
    fontWeight: 700,
  },
  title: {
    ...Fonts.Inter,
    fontSize: 14,
    fontWeight: 400,
  },
};

const cardData = [
  {
    icon: <img src={require('../../assets/ShieldCheck.png')} size={60} style={{color:'#005F99', fontSize:20}} />,
    title: "Safe",
    description: "Precise targeting of genetically encoded message.",
  },
  {
    icon: <img src={require('../../assets/MonitorArrowUp.png')} style={{color:'#005F99', fontSize:20}} />,
    title: "Scalable",
    description:
      "In vivo reprogramming eliminates costs and risks of ex vivo treatments.",
  },
  {
    icon: <img src={require('../../assets/UsersThree.png')} style={{color:'#005F99', fontSize:20}} />,
    title: "Universal",
    description:
      "Ability to read the universal language-the RNA profile- that drives individual cell behavior.",
  },
];

export default function ContinuousProteinTherapy() {
  return (
    <Box sx={{ padding: 4, }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          fontWeight: "bold",
          fontSize: 32,
          color: "white",
          marginBottom: 4,
        }}
      >
        Continuous Protein Therapy
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {cardData.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                backgroundColor: "#D5F0FE",
                padding: 3,
                textAlign: "center",
                borderRadius: 0,
                height:'100%'
              }}
            >
              <CardContent>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    width: "100%",
                  }}
                >
                  {item.icon}
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", marginTop: 2, color: "#000",...styles.heading }}
                  >
                    {item.title}
                  </Typography>
                </div>
                <div style={{width:'50px',backgroundColor:'#005F99',height:2,marginTop:20,marginBottom:20}} />
                <Typography
                  variant="body2"
                  sx={{ color: "#555", marginTop: 1, ...styles.title, textAlign:'left',width:260 }}
                >
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
