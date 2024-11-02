// import React from 'react';
// import { Box, Grid, Typography, Card, CardContent } from '@mui/material';
// // import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
// // import PublishIcon from '@mui/icons-material/Publish';
// // import GroupIcon from '@mui/icons-material/Group';

// const cardData = [
//   {
//     // icon: <CheckCircleOutlineIcon style={{ fontSize: 48, color: '#1E88E5' }} />,
//     title: 'Safe',
//     description: 'Precise targeting of genetically encoded message.',
//   },
//   {
//     // icon: <PublishIcon style={{ fontSize: 48, color: '#1E88E5' }} />,
//     title: 'Scalable',
//     description: 'In vivo reprogramming eliminates costs and risks of ex vivo treatments.',
//   },
//   {
//     // icon: <GroupIcon style={{ fontSize: 48, color: '#1E88E5' }} />,
//     title: 'Universal',
//     description: 'Ability to read the universal language - the RNA profile - that drives individual cell behavior.',
//   },
// ];

// export default function ContinuousProteinTherapy() {
//   return (
//     <Box sx={{ padding: 4, backgroundColor: '#F0F4FA' }}>
//       <Typography variant="h4" align="center" gutterBottom>
//         Continuous Protein Therapy
//       </Typography>
//       <Grid container spacing={4} justifyContent="center">
//         {cardData.map((item, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <Card sx={{ backgroundColor: '#E3F2FD', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
//               <CardContent sx={{ textAlign: 'center' }}>
//                 {item.icon}
//                 <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 2 }}>
//                   {item.title}
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary" sx={{ marginTop: 1 }}>
//                   {item.description}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// }
