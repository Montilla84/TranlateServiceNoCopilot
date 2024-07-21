import React from 'react';
import { Container, Typography, Grid, Paper, Button } from '@mui/material';

const Home: React.FC = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Welcome to Our Service
      </Typography>

      <Grid container spacing={3} style={{ marginTop: 20 }}>
        <Grid item xs={12} sm={6}>
          <Paper style={{ padding: 20 }}>
            <Typography variant="h4">Our Services</Typography>
            <Typography variant="body1">We offer a variety of services to meet your needs...</Typography>
            <Button variant="contained" color="primary" style={{ marginTop: 20 }}>
              Learn More
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper style={{ padding: 20 }}>
            <Typography variant="h4">Testimonials</Typography>
            <Typography variant="body1">See what our customers are saying...</Typography>
            <Button variant="contained" color="primary" style={{ marginTop: 20 }}>
              Read More
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper style={{ padding: 20 }}>
            <Typography variant="h4">Special Offers</Typography>
            <Typography variant="body1">Don't miss out on our special offers...</Typography>
            <Button variant="contained" color="primary" style={{ marginTop: 20 }}>
              View Offers
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
