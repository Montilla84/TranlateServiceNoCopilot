import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import UserProfile from './UserProfile';
import instance from '../axiosConfig'; // Importar la instancia de Axios

interface HeaderProps {
  toggleDrawer: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ toggleDrawer }) => {
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        // Reemplaza esta URL con la URL real de tu API
        const response = await instance.get('/api/auth/user'); // Usar la instancia de Axios
        const data = await response.data;
        setUsername(data.username);
      } catch (error) {
        console.error('Error fetching username:', error);
      }
    };

    fetchUsername();
  }, []);

  console.log('Header Username:', username); // Agregar console.log para depuración

  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ marginLeft: '16px', flexGrow: 1 }}>
          My App
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/about-us">About Us</Button>
        <Button color="inherit" component={Link} to="/postal-zip">Postal Zip</Button>
        <Button color="inherit" component={Link} to="/login">Login</Button>
        <Button color="inherit" component={Link} to="/SignUp">Sign Up</Button>
        <LanguageSwitcher />
        {username && <UserProfile username={username} />} {/* Añadir el componente UserProfile */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;