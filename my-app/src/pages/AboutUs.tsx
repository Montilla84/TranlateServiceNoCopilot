// src/pages/AboutUs.tsx
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const AboutUs: React.FC = () => {
  return (
    <Container className="about-us-container">
      <Box sx={{ textAlign: 'center', marginTop: 4 }}>
        <Typography variant="h2" gutterBottom>
          About Us
        </Typography>
        <Typography variant="h4" gutterBottom>
          Hola, soy la página de About Us
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 2 }}>
          Aquí puedes encontrar información sobre nuestro equipo y nuestra misión.
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutUs;
