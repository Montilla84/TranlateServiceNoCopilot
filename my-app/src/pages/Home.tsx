import React from 'react';
import { Container, Typography, Grid, Paper, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import ServicesIcon from '@mui/icons-material/Work';
import TestimonialsIcon from '@mui/icons-material/Star';
import OffersIcon from '@mui/icons-material/LocalOffer';

// Estilos personalizados para la sección principal
const HeroSection = styled(Box)(({ theme }) => ({
  backgroundImage: 'url(/path-to-hero-image.jpg)', // Cambia esta URL por la de tu imagen
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: 'black',
  textAlign: 'center',
  padding: theme.spacing(10, 0),
}));

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection>
        <Container>
          <Typography variant="h2" gutterBottom>
            Welcome to Our Service
          </Typography>
          <Typography variant="h5" gutterBottom>
            Your solution for professional translation services
          </Typography>
          <Button variant="contained" color="primary" href="#services">
            Learn More
          </Button>
        </Container>
      </HeroSection>

      {/* Main Content Section */}
      <Container style={{ marginTop: 20 }}>
        <Grid container spacing={3}>
          {/* Services Section */}
          <Grid item xs={12} sm={6}>
            <Paper style={{ padding: 20 }}>
              <Typography variant="h4" gutterBottom>
                <ServicesIcon style={{ verticalAlign: 'middle' }} /> Our Services
              </Typography>
              <Typography variant="body1" paragraph>
                We offer a variety of services to meet your needs, including technical translation, simultaneous interpretation, and more.
              </Typography>
              <Button variant="contained" color="primary" href="#services">
                Learn More
              </Button>
            </Paper>
          </Grid>

          {/* Testimonials Section */}
          <Grid item xs={12} sm={6}>
            <Paper style={{ padding: 20 }}>
              <Typography variant="h4" gutterBottom>
                <TestimonialsIcon style={{ verticalAlign: 'middle' }} /> Testimonials
              </Typography>
              <Typography variant="body1" paragraph>
                See what our customers are saying about us. We take pride in delivering top-quality service and exceeding expectations.
              </Typography>
              <Button variant="contained" color="primary" href="#testimonials">
                Read More
              </Button>
            </Paper>
          </Grid>

          {/* Special Offers Section */}
          <Grid item xs={12}>
            <Paper style={{ padding: 20 }}>
              <Typography variant="h4" gutterBottom>
                <OffersIcon style={{ verticalAlign: 'middle' }} /> Special Offers
              </Typography>
              <Typography variant="body1" paragraph>
                Don't miss out on our special offers. Check out our current promotions and discounts available for a limited time.
              </Typography>
              <Button variant="contained" color="primary" href="#offers">
                View Offers
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
