import React, { useState } from 'react';
import { Container, Drawer, List, ListItemButton, Toolbar } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import PostalZip from './pages/PostalZip';
import './index.css';

const App: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  return (
    <Router>
      <Header toggleDrawer={toggleDrawer} />
      <Toolbar />
      <Container className="app-container">
        <Drawer open={drawerOpen} onClose={() => toggleDrawer(false)}>
          <List>
            <ListItemButton onClick={() => toggleDrawer(false)}>Opción 1</ListItemButton>
            <ListItemButton onClick={() => toggleDrawer(false)}>Opción 2</ListItemButton>
          </List>
        </Drawer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/postal-zip" element={<PostalZip />} />  
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
