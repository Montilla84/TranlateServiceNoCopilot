import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import UserProfile from './UserProfile';
import instance from '../axiosConfig'; // Importar la instancia de Axios
import { useAuth } from '../context/authContext'; // Import the useAuth hook

interface HeaderProps {
  toggleDrawer: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ toggleDrawer }) => {
  const [username, setUsername] = useState<string | null>(null);
  const { isAuthenticated } = useAuth(); // Get authentication status

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const token = localStorage.getItem('token'); // Get the token from localStorage
        if (!token) {
          throw new Error('No token found');
        }
        console.log('Token:', token); // Log the token
        const response = await instance.get('/api/auth/user', {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the request headers
          },
        });

        console.log('API Response:', response); // Log the API response

        const data = await response.data;
        setUsername(data.username);
      } catch (error) {
        console.error('Error fetching username:', error);
      }
    };

    if (isAuthenticated) {
      console.log('User is authenticated'); // Log authentication status
      fetchUsername();
    } else {
      console.log('User is not authenticated'); // Log authentication status
    }
  }, [isAuthenticated]);

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
        {!isAuthenticated && <Button color="inherit" component={Link} to="/login">Login</Button>}
        {!isAuthenticated && <Button color="inherit" component={Link} to="/SignUp">Sign Up</Button>}
        {username && <UserProfile username={username} />} {/* Añadir el componente UserProfile */}
        <LanguageSwitcher />
      </Toolbar>
    </AppBar>
  );
};

export default Header;