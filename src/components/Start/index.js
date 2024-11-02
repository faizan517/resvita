import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Fonts } from '../../utils/Fonts';
import dnaImage from '../../assets/DNA.gif';

const styles = {
  mainContainer: {
    position: 'relative',
    margin: '0 auto',
    background: 'linear-gradient(135deg, #005F99, #033451, #131126, #1E1E1E)',
    overflow: 'hidden',
    height: '100vh', // Full height for responsiveness
  },
  advancedSkinTreatments: {
    color: '#ffffff',
    ...Fonts.Helvetica,
    fontSize: { xs: '40px', sm: '60px', md: '90px', lg: '110px' }, // Responsive font size
    fontWeight: 700,
    textAlign: 'left',
  },
  poweredBySyntheticBiology: {
    color: '#ffffff',
    ...Fonts.Inter,
    fontStyle: 'italic',
    fontSize: { xs: '24px', sm: '30px', md: '36px' }, // Responsive font size
    fontWeight: 700,
    textAlign: 'left',
    marginTop: { xs: 2, md: 4 }, // Adjust spacing for responsiveness
  },
  skinDiseaseTreatment: {
    color: '#ffffff',
    ...Fonts.Inter,
    fontStyle: 'italic',
    fontSize: { xs: '16px', sm: '18px', md: '20px' }, // Responsive font size
    fontWeight: 400,
    textAlign: 'left',
    marginTop: { xs: 1, md: 2 },
  },
  dna: {
    position: 'absolute',
    width: '100%', // Full width for responsiveness
    height: '100%', // Full height for responsiveness
    top: 0,
    left: 0,
    backgroundImage: `url(${dnaImage})`,
    backgroundSize: 'cover',
    zIndex: 1,
  },
};

export default function Start() {
  return (
    <Box sx={styles.mainContainer}>
      <Box sx={styles.dna} />
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          paddingX: { xs: 2, md: 10 }, // Adjust padding for responsiveness
          paddingY: { xs: 2, md: 10 }, // Adjust padding for responsiveness
          marginRight:40
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h1" sx={styles.advancedSkinTreatments}>
            ADVANCED SKIN
            <br />
            TREATMENTS
          </Typography>
        <Grid item xs={12} md={6}>
          <Box sx={{ width: { xs: '80vw', md: '50vw' }, textAlign: 'left', marginTop: { xs: 3, md: 5 } }}>
            <Typography sx={styles.poweredBySyntheticBiology}>
              Powered By Synthetic Biology
            </Typography>
            <Typography sx={styles.skinDiseaseTreatment}>
              Transforming skin disease treatment with genetically engineered
              bacteria and delivering sustained, targeted therapy for lasting
              relief.
            </Typography>
          </Box>
        </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
