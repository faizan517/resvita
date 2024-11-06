import React from 'react';
import Slider from 'react-slick';
import { Card, CardContent, Typography, Box, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FaceIcon from '@mui/icons-material/Face';
import HealingIcon from '@mui/icons-material/Healing';
import SpaIcon from '@mui/icons-material/Spa';
import image1 from '../../assets/Anti-aging.png'
import image2 from '../../assets/body.png'
import image3 from '../../assets/face.png'
import image4 from '../../assets/foot.png'
import image5 from '../../assets/foot2.png'
import { FaArrowLeft,FaArrowRight } from "react-icons/fa6";
import { Fonts } from '../../utils/Fonts';


const cardData = [
  {
    icon: <img src={image1} style={{ fontSize: 48, color: '#00B8D4' }} />,
    title: 'Netherton Syndrome',
    description: 'A rare genetic skin disorder characterized by redness, scaling, and fragile skin.',
  },
  {
    icon: <img src={image2} style={{ fontSize: 48, color: '#00B8D4' }} />,
    title: 'Atopic Dermatitis',
    description: 'A chronic skin condition marked by inflammation, itching, and dry, scaly patches.',
  },
  {
    icon: <img src={image3} style={{ fontSize: 48, color: '#00B8D4' }} />,
    title: 'Acne vulgaris',
    description: 'A common skin condition featuring pimples, blackheads, and cysts.',
  },
  
  {
    icon: <img src={image4} style={{ fontSize: 48, color: '#00B8D4' }} />,
    title: ' Anti-aging',
    description: 'Anti-aging as a disease views aging as a treatable condition.',
  },
  {
    icon: <img src={image5} style={{ fontSize: 48, color: '#00B8D4' }} />,
    title: 'Chronic wounds',
    description: 'Chronic wounds are a disease marked by prolonged healing failure.',
  },
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
      <FaArrowRight  />
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
      <FaArrowLeft  />
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
    <Box sx={{ padding: 4}}>
      <Typography variant="h4" align="center" color="white" style={{fontWeight:600,fontSize:40,textAlign:'center',...Fonts.Inter}} gutterBottom>
        New Approaches To Treating Skin Disorders
      </Typography>
      <Slider {...settings}>
        {cardData.map((item, index) => (
          <Card
            key={index}
            sx={{
              maxWidth: 330,
              height:265,
              margin: '0 auto',
              backgroundColor: '#333333',
              color: 'white',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
              borderBottomLeftRadius: 12,
              borderBottomRightRadius: 12,
              borderTopWidth: 3,
              borderTopColor: '#005F99',
              borderTopStyle:'solid',
              borderTopRightRadius:0,
              borderTopLeftRadius:0,margin:1
            }}
          >
            <CardContent sx={{ textAlign: 'left',padding: 3,paddingLeft: 4 }}>
              {item.icon}
              <Typography variant="h6" sx={{padding: 1,  ...Fonts.Manrope,fontWeight:700,fontSize:18 }}>
                {item.title}
              </Typography>
              <Typography  sx={{ padding: 1, ...Fonts.Manrope,fontWeight:400,fontSize:12,lineHeight:2.6  }}>
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
