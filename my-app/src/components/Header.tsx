import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher'; // Importar el componente LanguageSwitcher

interface HeaderProps {
  toggleDrawer: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ toggleDrawer }) => {
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
        <Button color="inherit" component={Link} to="/login">Login</Button> {/* Agregar botón de Login */}
        <Button color="inherit" component={Link} to="/SignUp">Sign Up</Button> {/* Agregar botón de Sign Up */}
        <LanguageSwitcher /> {/* Añadir el selector de idioma en el header */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
