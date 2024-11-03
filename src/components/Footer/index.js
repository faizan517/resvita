import React from 'react';
import { Box, Typography, Divider, Link, IconButton, Container } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Fonts } from '../../utils/Fonts';

const styles = {
    container: {
      padding: 15,
      backgroundColor: 'black',
    },
    text: {
      color: 'white',
      textAlign: 'center',
      ...Fonts.Heboo,
      fontSize: '36px',
      fontWeight: 700,
    },
  };

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Team', href: '#team' },
  { name: 'Careers', href: '#careers' },
];

function Footer() {
  return (
    <Box component="footer" sx={{ backgroundColor: '#000', color: '#fff', py: 3 }}>
        <Container sx={styles.container}>
      <Typography  component="p" sx={styles.text}>
        ResVita Bio is pioneering skin disease treatment through engineered
        bacteria that deliver therapeutic proteins directly to affected areas.
        Our innovative approach offers targeted and sustained relief for
        conditions like Netherton Syndrome and Severe Atopic Dermatitis.
      </Typography>
    </Container>
      {/* Top Section with Logo and Navigation */}
      <Box display="flex" justifyContent="space-between" alignItems="center" px={3} py={2}>
        {/* Logo */}
        <Box component="img" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8964fcffe3f81a845206b1b42056bf193a27d97a02d76d708a2bfa24b76a3d7?placeholderIfAbsent=true&apiKey=5eba7f88b1544a6c80bdfe8eb9a7da89" alt="Company Logo" sx={{ height: 50 }} />

        {/* Navigation Links */}
        <Box display="flex" gap={4}>
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              underline="none"
              color="inherit"
              sx={{ fontWeight: 'bold', fontSize: '16px' }}
            >
              {item.name}
            </Link>
          ))}
        </Box>
      </Box>

      {/* Divider */}
      <Divider sx={{ backgroundColor: '#ffffff', my: 2 }} />

      {/* Bottom Section with Copyright and Social Icons */}
      <Box display="flex" justifyContent="space-between" alignItems="center" px={3}>
        {/* Copyright */}
        <Typography variant="body2">
          All rights reserved ® resvitabio.com | Terms and conditions apply!
        </Typography>

        {/* Social Icons */}
        <Box display="flex" gap={2}>
          <IconButton href="https://facebook.com" target="_blank" aria-label="Facebook" sx={{ color: '#fff' }}>
            <FacebookIcon />
          </IconButton>
          <IconButton href="https://instagram.com" target="_blank" aria-label="Instagram" sx={{ color: '#fff' }}>
            <InstagramIcon />
          </IconButton>
          <IconButton href="https://linkedin.com" target="_blank" aria-label="LinkedIn" sx={{ color: '#fff' }}>
            <LinkedInIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
