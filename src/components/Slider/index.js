import React from 'react';
import Slider from 'react-slick';
import { Card, CardContent, Typography, Box, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FaceIcon from '@mui/icons-material/Face';
import HealingIcon from '@mui/icons-material/Healing';
import SpaIcon from '@mui/icons-material/Spa';

const cardData = [
  {
    icon: <HealingIcon style={{ fontSize: 48, color: '#00B8D4' }} />,
    title: 'Netherton Syndrome',
    description: 'A rare genetic skin disorder characterized by redness, scaling, and fragile skin.',
  },
  {
    icon: <FaceIcon style={{ fontSize: 48, color: '#00B8D4' }} />,
    title: 'Atopic Dermatitis',
    description: 'A chronic skin condition marked by inflammation, itching, and dry, scaly patches.',
  },
  {
    icon: <SpaIcon style={{ fontSize: 48, color: '#00B8D4' }} />,
    title: 'Acne vulgaris',
    description: 'A common skin condition featuring pimples, blackheads, and cysts.',
  },
  // Add more items if needed
];

// Custom Arrow Components
function NextArrow(props) {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: 'absolute',
        top: '50%',
        right: '-30px',
        transform: 'translateY(-50%)',
        backgroundColor: '#1E88E5',
        color: 'white',
        '&:hover': { backgroundColor: '#1565C0' },
      }}
    >
      <ArrowForwardIosIcon />
    </IconButton>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: 'absolute',
        top: '50%',
        left: '-30px',
        transform: 'translateY(-50%)',
        backgroundColor: '#1E88E5',
        color: 'white',
        '&:hover': { backgroundColor: '#1565C0' },
      }}
    >
      <ArrowBackIosIcon />
    </IconButton>
  );
}

const SkinDisorderSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ padding: 4, backgroundColor: '#121212' }}>
      <Typography variant="h4" align="center" color="white" gutterBottom>
        New Approaches To Treating Skin Disorders
      </Typography>
      <Slider {...settings}>
        {cardData.map((item, index) => (
          <Card
            key={index}
            sx={{
              maxWidth: 300,
              margin: '0 auto',
              backgroundColor: '#333333',
              color: 'white',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
              borderRadius: 2,
            }}
          >
            <CardContent sx={{ textAlign: 'center' }}>
              {item.icon}
              <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 2 }}>
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{ marginTop: 1 }}>
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Slider>
    </Box>
  );
};

export default SkinDisorderSlider;
