import React, { useState } from 'react';
import { Container, Drawer, List, ListItemButton, Toolbar } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import PostalZip from './pages/PostalZip';
import Notification from './components/Notification';
import './index.css';

const App: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [notification, setNotification] = useState({ open: false, message: '', severity: 'success' });

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  const showNotification = (message: string, severity: 'success' | 'error' | 'warning' | 'info') => {
    setNotification({ open: true, message, severity });
  };

  const handleCloseNotification = () => {
    setNotification({ ...notification, open: false });
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
          <Route path="/login" element={<Login showNotification={showNotification} />} />
          <Route path="/signup" element={<SignUp showNotification={showNotification} />} />
        </Routes>
      </Container>
      <Footer />
      <Notification
        open={notification.open}
        message={notification.message}
        severity={notification.severity as 'success' | 'error' | 'warning' | 'info'}
        onClose={handleCloseNotification}
      />
    </Router>
  );
}

export default App;
