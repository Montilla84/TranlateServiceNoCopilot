import React, { useState } from 'react';
import { Container, Typography, Button, Card, CardContent, CardActions, IconButton } from '@mui/material';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import './index.css';

// Importar SVGs como URLs
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <Router>
    <Container className="app-container">
    <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
          </ul>
        </nav>
      <div className="icon-container">
        <IconButton href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} alt="Vite logo" />
        </IconButton>
        <IconButton href="https://react.dev" target="_blank">
          <img src={reactLogo} alt="React logo" />
        </IconButton>
      </div>
      <Typography variant="h2" gutterBottom>
        Vite + React
      </Typography>
      <Card sx={{ maxWidth: 345, margin: '20px auto' }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Count is {count}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setCount((count) => count + 1)}
          >
            Increment Count
          </Button>
        </CardActions>
      </Card>
      <Typography variant="body1" sx={{ marginTop: 30, color: '#666' }}>
        Click on the Vite and React logos to learn more
      </Typography>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </Container>
    </Router>

  );
}

export default App;
