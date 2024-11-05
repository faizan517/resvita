import React from 'react';
import { Box, Typography, Avatar, Grid, Card, CardContent } from '@mui/material';

const advisors = [
  { name: "Dr. Lisa Beck, MD", image: "/path/to/image1.jpg" },
  { name: "Advisor 2", image: "/path/to/image2.jpg" },
  { name: "Advisor 3", image: "/path/to/image3.jpg" },
  { name: "Advisor 4", image: "/path/to/image4.jpg" },
  { name: "Advisor 5", image: "/path/to/image5.jpg" },
];

const Advisors = () => {
  return (
    <Box sx={{ backgroundColor: "#000", color: "#fff", py: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Meet Our Advisors
      </Typography>
      <Grid container justifyContent="center" spacing={3}>
        {advisors.map((advisor, index) => (
          <Grid item key={index} xs={12} sm={6} md={2}>
            <Card sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
              <Avatar
                alt={advisor.name}
                src={advisor.image}
                sx={{ width: 100, height: 100, mx: "auto", borderRadius: "8px" }}
              />
              <CardContent>
                <Typography variant="body1" align="center" sx={{ color: "#fff" }}>
                  {advisor.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Advisors;
