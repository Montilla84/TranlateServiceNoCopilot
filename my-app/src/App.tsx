import React from 'react';
import { Container } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';  // Importa el Header desde el nuevo directorio
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import PostalZip from './pages/PostalZip';  // Importar la nueva página
import './index.css';
import Pricing from './pages/Pricing';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Container className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/postal-zip" element={<PostalZip />} />  
          <Route path="/pricing" element={<Pricing />} /> 

        </Routes>
      </Container>
    </Router>
  );
}

export default App;
